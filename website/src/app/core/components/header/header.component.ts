import {Component, ElementRef, OnInit} from '@angular/core';
import {HeaderMode, HeaderService} from '../../services/header.service';

@Component({
    selector: 'aconio-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    logoMode: HeaderMode = HeaderMode.LIGHT;
    menuVisible = false;

    constructor(public element: ElementRef, private headerService: HeaderService) {
        this.headerService.themeChange.subscribe((mode) => this.logoMode = mode);
    }

    ngOnInit(): void {
    }

    toggleMobile() {
        this.menuVisible = !this.menuVisible;
    }
}
