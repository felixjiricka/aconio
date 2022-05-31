import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'aconio-service-card',
    templateUrl: './service-card.component.html',
    styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {
    @Input() icon: string;
    @Input() title: string;
    @Input() description: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
