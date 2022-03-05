export interface AutomationProcess {
    hourlyRate: number;
    hours: number;
    monthly: number;
}

export interface CalculatedAutomationProcess {
    savings: number;
    developmentCosts: number;
}

export interface IntervalCalculatedAutomationProcess {
    monthly?: {
        [key: number]: CalculatedAutomationProcess;
    };
    yearly?: {
        [key: number]: CalculatedAutomationProcess;
    };
}

export interface ProcessChartData {
    data: number[];
    labels: string[];
}

export interface IntervalProcessChartData {
    monthly?: ProcessChartData;
    yearly?: ProcessChartData;
}
