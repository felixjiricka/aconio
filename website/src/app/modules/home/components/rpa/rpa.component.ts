import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'aconio-rpa',
    templateUrl: './rpa.component.html',
    styleUrls: ['./rpa.component.css']
})
export class RpaComponent implements OnInit {
    advantages: {
        icon: string;
        title: string;
        description: string;
    }[] = [];

    constructor() {
        this.advantages = [
            {
                icon: 'trending-up',
                title: 'Effizienz steigern',
                description: 'Entlasten Sie Ihre Mitarbeiter von repetitiven Tätigkeiten und fokussieren Sie sich auf das Wesentliche.'
            },
            {
                icon: 'dollar-sign',
                title: 'Kosten senken',
                description: 'Unsere Roboter sind 24/7 einsatzbereit und können Prozesse durchführen.'
            },
            {
                icon: 'alert',
                title: 'Fehler reduzieren',
                description: 'Roboter arbeiten konsistent und verlässlich. Mitarbeiter können kritische Schritte zusätzlich validieren.'
            },
            {
                icon: 'smile',
                title: 'Zufriedenheit erhöhen',
                description: 'Überzeugen Sie Ihre Kunden durch schnellere Antwortzeiten und Verarbeitung von Stammdaten.'
            }
        ];
    }

    ngOnInit(): void {
    }

}
