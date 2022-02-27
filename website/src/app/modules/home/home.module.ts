import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CoreModule } from '../../core/core.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        AngularSvgIconModule,
        CoreModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
