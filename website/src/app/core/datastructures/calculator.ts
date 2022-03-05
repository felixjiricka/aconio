import {AutomationProcess, CalculatedAutomationProcess} from './automation-process.model';

export class Calculator {
    private static developmentOptions = {
        hourlyRate: 75,
        neededHours: 20,
    };

    private static _defaultProcessKeys: number[] = [1, 2, 4, 10, 15];

    public static calculateProcess(process: AutomationProcess) {
        const directSavings = Number(process.hours) * Number(process.hourlyRate);
        console.log(directSavings);
        const result: {
            monthly?: {
                [key: number]: CalculatedAutomationProcess;
            };
            yearly?: {
                [key: number]: CalculatedAutomationProcess;
            };
        } = {
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
}
