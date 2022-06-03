import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {CoreModule} from '../../core/core.module';
import {RouterModule} from '@angular/router';
import {HeroComponent} from './components/hero/hero.component';
import {ServicesComponent} from './components/services/services.component';
import {ServiceCardComponent} from './components/service-card/service-card.component';
import {RpaComponent} from './components/rpa/rpa.component';
import {WayToAutomateComponent} from './components/way-to-automate/way-to-automate.component';
import {FinanceAutomationComponent} from './components/finance-automation/finance-automation.component';
import {ToolstackComponent} from './components/toolstack/toolstack.component';
import {SwiperModule} from 'swiper/angular';

@NgModule({
    declarations: [
        HomeComponent,
        HeroComponent,
        ServicesComponent,
        ServiceCardComponent,
        RpaComponent,
        WayToAutomateComponent,
        FinanceAutomationComponent,
        ToolstackComponent
    ],
    imports: [CommonModule, AngularSvgIconModule, CoreModule, RouterModule, SwiperModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
