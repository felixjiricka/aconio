import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';
import gsap from 'gsap';
import {HeaderComponent} from '../../../../core/components/header/header.component';
import {HeaderMode, HeaderService} from '../../../../core/services/header.service';

@Component({
    selector: 'aconio-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
    @ViewChild('heroTypewriter', {static: false}) heroTypewriterEl: ElementRef;
    @ViewChild(HeaderComponent, {static: false}) headerEl: ElementRef;

    constructor(private heroEl: ElementRef, private headerService: HeaderService) {
    }

    ngAfterViewInit(): void {
        const typewriter = new Typewriter(this.heroTypewriterEl.nativeElement, {
            strings: ['Effizienz steigern.', 'Mitarbeiter entlasten.', 'Prozesse Automatisieren.'],
            autoStart: true,
            loop: true
        });

        const scroller = document.getElementById('site-wrapper');
        const introEL = document.querySelector('aconio-header img');

        gsap.to(introEL, {
            scrollTrigger: {
                trigger: this.heroEl.nativeElement,
                start: 'bottom top',
                end: '+=0',
                scroller,
                toggleActions: 'play pause resume reset',
                onEnterBack: () => {
                    console.log('on enter back');
                    this.headerService.update(HeaderMode.LIGHT);
                },
                onEnter: () => {
                    console.log('on enter');
                    this.headerService.update(HeaderMode.DARK);
                }
            }
        });
    }
}
