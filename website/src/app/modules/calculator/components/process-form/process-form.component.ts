import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AutomationProcess} from '../../../../core/datastructures/automation-process.model';

@Component({
    selector: 'aconio-process-form',
    templateUrl: './process-form.component.html',
    styleUrls: ['./process-form.component.css'],
})
export class ProcessFormComponent implements AfterViewInit {
    monthlyCostMask = null;
    hourlyRateMask = this.monthlyCostMask = {
        mask: Number,
        scale: 2,
        signed: false,
        normalizeZeros: true,
        thousandsSeparator: '.',
        radix: ',',
        min: 0,
        padFractionalZeros: true
    };

    hourMask = {
        mask: Number
    }

    _default: AutomationProcess = {
        hourlyRate: 120.00,
        hours: 20.00,
        monthly: 700.00,
    };

    processForm: FormGroup;
    @Output() processChanged = new EventEmitter<AutomationProcess>();

    constructor(private fb: FormBuilder) {
        this.processForm = this.fb.group({
            hourlyRate: [0, [Validators.required, Validators.min(1)]],
            hours: [0, [Validators.required, Validators.min(1)]],
            monthly: [0, [Validators.required, Validators.min(1)]],
        });
    }

    ngAfterViewInit(): void {
        this.processForm.patchValue(this._default);
        this.processChanged.emit(this._default);

        this.processForm.valueChanges.subscribe((value) => {
            if (this.processForm.valid && this.checkIfPositive()) {
                this.processChanged.emit(value as AutomationProcess);
            } else {
                console.log('Form value is not valid, please make sure that the calculated monthly saving is positive');
            }
        });
    }

    hourlyRateChanged(value) {
        this.processForm.controls.hourlyRate.setValue(Number(value));
    }

    hourChanged(value) {
        this.processForm.controls.hours.setValue(Number(value));
    }

    monthlyCostChanged(value) {
        this.processForm.controls.monthly.setValue(Number(value));
    }

    private checkIfPositive() {
        const hourlyRate = this.processForm.value.hourlyRate;
        const hours = this.processForm.value.hours;
        const monthly = this.processForm.value.monthly;

        return hourlyRate * hours - monthly > 0;
    }
}
