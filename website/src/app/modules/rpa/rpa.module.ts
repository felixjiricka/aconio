import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RpaComponent} from './rpa.component';
import {CoreModule} from '../../core/core.module';

@NgModule({
    declarations: [RpaComponent],
    imports: [CommonModule, CoreModule],
})
export class RpaModule {}
