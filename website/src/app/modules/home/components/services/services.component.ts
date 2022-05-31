import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'aconio-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
    aconioServices: {
        icon: string;
        title: string;
        description: string;
    }[] = [];

    constructor() {
        this.aconioServices = [
            {
                icon: 'workflow',
                title: 'Workflow Development',
                description: 'Design & Entwicklung von kleinen Workflows zum Datenaustausch zwischen Systemen, bis hin zu vollständigen Software-Lösungen für anspruchsvollere Anwendungsfälle.'
            },
            {
                icon: 'robot',
                title: 'Robotic Process Automation',
                description: 'Mittels RPA automatisieren wir repetitive Prozesse und Tätigkeiten. Somit sparen Ihre Mitarbeiter Zeit und können diese in profitablere und anspruchsvollere Aufgaben investieren.'
            },
            {
                icon: 'people-talking',
                title: 'Automation Consulting',
                description: 'Beratung in allen Bereichen der digitalen Automatisierung. Oftmals lassen sich Prozesse erheblich in ihrer Effizienz steigern, jedoch liegt die Lösung nicht immer auf der Hand.'
            }
        ];
    }

    ngOnInit(): void {
    }

}
