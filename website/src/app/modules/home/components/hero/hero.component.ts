import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
    selector: 'aconio-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
    @ViewChild('heroTypewriter', {static: false}) heroTypewriterEl: ElementRef;

    constructor() {
    }

    ngAfterViewInit(): void {
        const typewriter = new Typewriter(this.heroTypewriterEl.nativeElement, {
            strings: ['Effizienz steigern.', 'Mitarbeiter entlasten.', 'Prozesse Automatisieren.'],
            autoStart: true,
            loop: false
        });
    }
}
