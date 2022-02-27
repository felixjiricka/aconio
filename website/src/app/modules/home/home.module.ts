import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgIconsModule} from '@ngneat/svg-icon';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
    ]
})
export class HomeModule {}
