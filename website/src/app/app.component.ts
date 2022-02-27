import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {SvgIconRegistryService} from 'angular-svg-icon';
import {ICONS} from './core/utils/icons';
import Scrollbar from 'smooth-scrollbar';
import {ScrollTrigger} from 'gsap/all';
import {gsap} from 'gsap/all';
import { DisableScrollPlugin } from './core/plugins/DisableScrollPlugin';
import { DisableScrollWhenModalOpenPlugin } from './core/plugins/DisableScrollOpenModal';
import { HeaderComponent } from './core/components/header/header.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
    title = 'Aconio';

    @ViewChild(HeaderComponent, {static: false}) header: HeaderComponent;

    constructor(private iconReg: SvgIconRegistryService) {
        ICONS.forEach((icon) => {
            console.log(icon);
            this.iconReg.addSvg(icon.name, icon.data);
        });
    }

    ngAfterViewInit(): void {
        gsap.registerPlugin(ScrollTrigger);

        const scroller = document.getElementById('site-wrapper');

        Scrollbar.use(DisableScrollPlugin);
        Scrollbar.use(DisableScrollWhenModalOpenPlugin);

        const bodyScrollBar = Scrollbar.init(scroller, {
            damping: 0.1,
            delegateTo: document,
            plugins: {disableScroll: {direction: 'x'}},
        });

        bodyScrollBar.addListener((status) => {
            var offset = status.offset;

            this.header.element.nativeElement.style.top = offset.y + 'px';
            this.header.element.nativeElement.style.left = offset.x + 'px';
            ScrollTrigger.update();
        });

        bodyScrollBar.track.xAxis.element.remove();

        // Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element:
        ScrollTrigger.scrollerProxy(scroller, {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value; // setter
                }
                return bodyScrollBar.scrollTop; // getter
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
        });
    }
}
