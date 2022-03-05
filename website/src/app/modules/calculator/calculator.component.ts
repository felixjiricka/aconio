import {KeyValue} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {
    AutomationProcess,
    CalculatedAutomationProcess,
} from '../../core/datastructures/automation-process.model';
import {Calculator} from '../../core/datastructures/calculator';
import {ProcessChartData} from '../../core/datastructures/process-chart-data.model';

@Component({
    selector: 'aconio-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
    calculatedProcess: {
        monthly?: {
            [key: number]: CalculatedAutomationProcess;
        };
        yearly?: {
            [key: number]: CalculatedAutomationProcess;
        };
    } = {};

    monthlySavingsChartData: ProcessChartData = {
        data: [],
        labels: [],
    };

    yearlySavingsChartData: ProcessChartData = {
        data: [],
        labels: [],
    };

    constructor() {}

    ngOnInit(): void {}

    processUpdate(process: AutomationProcess) {
        this.calculatedProcess = Calculator.calculateProcess(process);

        // monthly

        let labels = [];
        let data = [];

        Object.keys(this.calculatedProcess.monthly).forEach((key) => {
            labels.push(`#${key}`);
            data.push(this.calculatedProcess.monthly[key].savings);
        });

        this.monthlySavingsChartData = {
            labels: labels,
            data: data,
        };

        // yearly

        labels = [];
        data = [];

        Object.keys(this.calculatedProcess.yearly).forEach((key) => {
            labels.push(`#${key}`);
            data.push(this.calculatedProcess.yearly[key].savings);
        });

        this.yearlySavingsChartData = {
            labels: labels,
            data: data,
        };

        console.log(this.calculatedProcess, this.monthlySavingsChartData);
    }

    keyAscOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return a.key > b.key ? 0 : 1;
    };
}
