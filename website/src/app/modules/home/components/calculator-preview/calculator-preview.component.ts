import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ChartOptions, ChartType, ChartDataset} from 'chart.js';

@Component({
    selector: 'aconio-calculator-preview',
    templateUrl: './calculator-preview.component.html',
    styleUrls: ['./calculator-preview.component.css'],
})
export class CalculatorPreviewComponent implements OnInit, AfterViewInit {
    public barChartOptions: ChartOptions = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false,
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: (value: string | number, index: number) => {
                        if (index % 2) return `€ ${Number(value).toLocaleString()}`;
                    },
                    color: '#a1a1aa',
                    padding: 5,
                },
                grid: {
                    borderColor: 'transparent',
                    color: '#27272a',
                },
            },
            x: {
                ticks: {
                    color: '#a1a1aa',
                },
                grid: {
                    display: false,
                },
                title: {
                    text: 'Anzahl der Prozesse',
                    display: true,
                    color: '#a1a1aa',
                    padding: 2,
                },
            },
        },
    };

    public barChartLabels: string[] = ['1', '2', '4', '10', '15'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = false;

    public barChartPlugins = [];
    public barChartData: ChartDataset[] = [];

    constructor() {
        const montlySavings = [500, 1700, 4100, 11300, 17300];
        const developmentCosts = [1500, 3000, 6000, 15000, 22500];

        this.barChartData.push({
            data: montlySavings,
            backgroundColor: '#dc2626',
            borderWidth: 2,
            borderColor: 'transparent',
            borderRadius: 10,
            hoverBorderWidth: 2,
            hoverBorderColor: 'transparent',
            hoverBackgroundColor: '#b91c1c',
        });
    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {

    }
}
