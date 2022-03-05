import {KeyValue} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {
    AutomationProcess,
    CalculatedAutomationProcess,
    IntervalCalculatedAutomationProcess,
    IntervalProcessChartData,
    ProcessChartData,
} from '../../core/datastructures/automation-process.model';
import {Calculator} from '../../core/datastructures/calculator';

@Component({
    selector: 'aconio-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
    calculatedProcess: IntervalCalculatedAutomationProcess = {};
    previewBarData: IntervalProcessChartData = {};

    constructor() {}

    ngOnInit(): void {}

    processUpdate(process: AutomationProcess) {
        this.calculatedProcess = Calculator.calculateProcess(process);

        const {monthly, yearly} = Calculator.convertToChartData(this.calculatedProcess);
        this.previewBarData.monthly = monthly;
        this.previewBarData.yearly = yearly;
    }

    keyAscOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return a.key > b.key ? 0 : 1;
    };
}
