import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'aconio-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    menuVisible: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    toggleMobile() {
        this.menuVisible = !this.menuVisible;
    }
}
