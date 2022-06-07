import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {SvgIconRegistryService} from 'angular-svg-icon';
import {ICONS} from './core/utils/icons';
import Scrollbar from 'smooth-scrollbar';
import SmoothScrollbar from 'smooth-scrollbar';
import {gsap, ScrollTrigger} from 'gsap/all';
import {DisableScrollPlugin} from './core/plugins/DisableScrollPlugin';
import {DisableScrollWhenModalOpenPlugin} from './core/plugins/DisableScrollOpenModal';
import {HeaderComponent} from './core/components/header/header.component';
import {NavigationEnd, Router} from '@angular/router';
import {HeroComponent} from './modules/home/components/hero/hero.component';
import {HeaderMode, HeaderService} from './core/services/header.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    title = 'Aconio';

    @ViewChild(HeaderComponent, {static: false}) header: HeaderComponent;
    @ViewChild(HeroComponent, {static: false}) heroEl: ElementRef;

    constructor(private iconReg: SvgIconRegistryService, private router: Router) {
        ICONS.forEach((icon) => this.iconReg.addSvg(icon.name, icon.data));

        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                const scroller = SmoothScrollbar.getAll()[0];

                if (scroller) {
                    scroller.scrollTo(0, 0, 0);
                }
            }
        });
    }

    ngAfterViewInit(): void {
        gsap.registerPlugin(ScrollTrigger);

        const scroller = document.getElementById('site-wrapper');

        Scrollbar.use(DisableScrollPlugin, DisableScrollWhenModalOpenPlugin);

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
