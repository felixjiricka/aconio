import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'aconio-info-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.css'],
})
export class InfoCardComponent implements OnInit {
    @Input() icon: string;
    @Input() header: string;
    @Input() content: string;

    constructor() {}

    ngOnInit(): void {}
}
