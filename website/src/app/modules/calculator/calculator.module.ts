import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalculatorComponent} from './calculator.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {ProcessFormComponent} from './components/process-form/process-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../../core/core.module';
import {IMaskModule} from 'angular-imask';

@NgModule({
    declarations: [CalculatorComponent, ProcessFormComponent],
    imports: [
        CommonModule,
        AngularSvgIconModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        IMaskModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalculatorModule {}
