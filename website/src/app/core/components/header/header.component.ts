import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
    selector: 'aconio-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    menuVisible: boolean = false;

    constructor(public element: ElementRef) {}

    ngOnInit(): void {}

    toggleMobile() {
        this.menuVisible = !this.menuVisible;
    }
}
