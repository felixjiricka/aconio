import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {CoreModule} from '../../core/core.module';
import {CalculatorPreviewComponent} from '../../core/components/calculator-preview/calculator-preview.component';
import {NgChartsModule} from 'ng2-charts';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, AngularSvgIconModule, CoreModule, RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
