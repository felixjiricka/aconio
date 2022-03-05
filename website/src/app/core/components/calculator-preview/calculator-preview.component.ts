import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ChartOptions, ChartType, ChartDataset} from 'chart.js';
import { ProcessChartData } from '../../datastructures/automation-process.model';

@Component({
    selector: 'aconio-calculator-preview',
    templateUrl: './calculator-preview.component.html',
    styleUrls: ['./calculator-preview.component.css'],
})
export class CalculatorPreviewComponent implements OnChanges {
    @Input() bars: ProcessChartData;

    public barChartOptions: ChartOptions = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false,
            },
        },
        scales: {
            y: {
                stacked: true,
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
                stacked: true,
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

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.bars.currentValue) {
            this.updateChart(changes.bars.currentValue);
        }
    }

    updateChart(input: ProcessChartData) {
        this.barChartLabels = input.labels;
        this.barChartData = [];

        const BAR_CONFIG = {
            borderWidth: 2,
            borderColor: 'transparent',
            borderRadius: 10,
            borderSkipped: false,
            hoverBorderWidth: 2,
            hoverBorderColor: 'transparent',
        }

        const BAR_COLORS = [
            {
                static: '#dc2626',
                hover: '#b91c1c'
            },
            {
                static: '#fff',
                hover: '#fff'
            },
        ]

        console.log(input);
        input.data.forEach((data, index) => {
            this.barChartData.push({
                label: index.toString(),
                data: data,
                backgroundColor: BAR_COLORS[index].static,
                hoverBackgroundColor: BAR_COLORS[index].hover,
                ...BAR_CONFIG
            });
        })
    }
}
