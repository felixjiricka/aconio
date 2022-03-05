import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgChartsModule } from 'ng2-charts';
import { CalculatorModule } from './modules/calculator/calculator.module';
import { registerLocaleData } from '@angular/common';
import * as locale from '@angular/common/locales/de-AT'

registerLocaleData(locale.default, 'de-AT');

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        HomeModule,
        CalculatorModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
        NgChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
