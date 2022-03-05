import {Component, OnInit} from '@angular/core';
import {IntervalProcessChartData} from '../../core/datastructures/automation-process.model';
import {Calculator} from '../../core/datastructures/calculator';

@Component({
    selector: 'aconio-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    previewBarData: IntervalProcessChartData;

    constructor() {
        this.previewBarData = Calculator.convertToChartData(Calculator.calculateProcess());
    }

    ngOnInit(): void {}
}
