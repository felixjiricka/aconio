import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartOptions, ChartType, ChartDataset} from 'chart.js';

@Component({
    selector: 'aconio-calculator-preview',
    templateUrl: './calculator-preview.component.html',
    styleUrls: ['./calculator-preview.component.css'],
})
export class CalculatorPreviewComponent implements OnChanges {
    @Input() bars: {
        data: number[],
        labels: string[]
    };

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

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.bars.currentValue) {
            this.updateChart(changes.bars.currentValue);
        }
    }

    updateChart(data: {
        data: number[],
        labels: string[]
    }) {
        this.barChartLabels = data.labels;
        this.barChartData = [];

        this.barChartData.push({
            data: data.data,
            backgroundColor: '#dc2626',
            borderWidth: 2,
            borderColor: 'transparent',
            borderRadius: 10,
            borderSkipped: false,
            hoverBorderWidth: 2,
            hoverBorderColor: 'transparent',
            hoverBackgroundColor: '#b91c1c',
        });
    }
}
