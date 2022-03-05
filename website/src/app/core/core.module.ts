import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {InfoCardComponent} from './components/info-card/info-card.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {CtaComponent} from './components/cta/cta.component';
import {CalculatorPreviewComponent} from './components/calculator-preview/calculator-preview.component';
import {NgChartsModule} from 'ng2-charts';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        InfoCardComponent,
        CtaComponent,
        CalculatorPreviewComponent,
    ],
    imports: [CommonModule, RouterModule, AngularSvgIconModule, NgChartsModule],
    exports: [
        HeaderComponent,
        FooterComponent,
        InfoCardComponent,
        CtaComponent,
        CalculatorPreviewComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
