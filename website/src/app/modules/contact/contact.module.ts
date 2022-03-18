import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [ContactComponent],
    imports: [CommonModule, AngularSvgIconModule, ReactiveFormsModule, FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactModule {}
