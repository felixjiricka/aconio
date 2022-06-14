import {Component, OnInit} from '@angular/core';
import {HeaderMode, HeaderService} from '../../../../core/services/header.service';

@Component({
    selector: 'aconio-imprint',
    templateUrl: './imprint.component.html',
    styleUrls: ['./imprint.component.css']
})
export class ImprintComponent implements OnInit {
    constructor(private headerService: HeaderService) {
        this.headerService.update(HeaderMode.DARK);
    }

    ngOnInit(): void {
    }
}
