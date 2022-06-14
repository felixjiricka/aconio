import {Component, OnInit} from '@angular/core';
import {HeaderMode, HeaderService} from '../../../../core/services/header.service';

@Component({
    selector: 'aconio-terms-of-service',
    templateUrl: './terms-of-service.component.html',
    styleUrls: ['./terms-of-service.component.css']
})
export class TermsOfServiceComponent implements OnInit {

    constructor(private headerService: HeaderService) {
        this.headerService.update(HeaderMode.DARK)
    }

    ngOnInit(): void {
    }

}
