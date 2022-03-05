import {
    AutomationProcess,
    CalculatedAutomationProcess,
    IntervalCalculatedAutomationProcess,
    IntervalProcessChartData,
} from './automation-process.model';

export class Calculator {
    private static _default: AutomationProcess = {
        hourlyRate: 120.0,
        hours: 20.0,
        monthly: 700.0,
    };

    private static developmentOptions = {
        hourlyRate: 75,
        neededHours: 20,
    };

    private static _defaultProcessKeys: number[] = [1, 2, 4, 10, 15];

    public static calculateProcess(process?: AutomationProcess) {
        if (!process) process = this._default;

        const directSavings = Number(process.hours) * Number(process.hourlyRate);
        const result: IntervalCalculatedAutomationProcess = {
            monthly: {},
            yearly: {},
        };

        this._defaultProcessKeys.forEach((amount) => {
            const monthlySavings = directSavings * amount - process.monthly;

            result.monthly[amount] = {
                savings: monthlySavings,
                developmentCosts:
                    this.developmentOptions.hourlyRate *
                    this.developmentOptions.neededHours *
                    amount,
            };

            result.yearly[amount] = {
                savings: monthlySavings * 12,
                developmentCosts:
                    this.developmentOptions.hourlyRate *
                    this.developmentOptions.neededHours *
                    amount,
            };
        });

        return result;
    }

    public static convertToChartData(
        calculated: IntervalCalculatedAutomationProcess
    ): IntervalProcessChartData {
        const chartData: IntervalProcessChartData = {};

        // monthly
        let labels = [];
        let data = [];

        Object.keys(calculated.monthly).forEach((key) => {
            labels.push(`#${key}`);
            data.push(calculated.monthly[key].savings);
        });

        chartData.monthly = {
            labels: labels,
            data: data,
        };

        // yearly
        labels = [];
        data = [];

        Object.keys(calculated.yearly).forEach((key) => {
            labels.push(`#${key}`);
            data.push(calculated.yearly[key].savings);
        });

        chartData.yearly = {
            labels: labels,
            data: data,
        };

        return chartData;
    }
}
