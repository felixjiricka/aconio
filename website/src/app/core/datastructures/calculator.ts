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
        let savingsLabel = [];
        let savingsData = [];

        Object.keys(calculated.monthly).forEach((key) => {
            savingsLabel.push(`#${key}`);
            savingsData.push(calculated.monthly[key].savings);
        });

        chartData.monthly = {
            labels: savingsLabel,
            data: [savingsData],
        };

        // yearly
        savingsLabel = [];
        savingsData = [];

        let developmentData = [];

        Object.keys(calculated.yearly).forEach((key) => {
            savingsLabel.push(`#${key}`);
            savingsData.push(calculated.yearly[key].savings);
            developmentData.push(calculated.yearly[key].developmentCosts);
        });

        chartData.yearly = {
            labels: savingsLabel,
            //data: [developmentData, savingsData],
            data: [savingsData],
        };

        return chartData;
    }
}
