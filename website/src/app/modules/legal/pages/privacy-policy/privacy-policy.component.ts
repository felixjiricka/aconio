import {Component, OnInit} from '@angular/core';
import {HeaderMode, HeaderService} from '../../../../core/services/header.service';

@Component({
    selector: 'aconio-privacy-policy',
    templateUrl: './privacy-policy.component.html',
    styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
    constructor(private headerService: HeaderService) {
        this.headerService.update(HeaderMode.DARK);
    }

    ngOnInit(): void {
    }
}
