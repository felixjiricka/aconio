import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, InfoCardComponent],
    imports: [CommonModule, RouterModule, AngularSvgIconModule],
    exports: [HeaderComponent, FooterComponent, InfoCardComponent]
})
export class CoreModule {}
