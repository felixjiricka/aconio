import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CtaComponent } from './components/cta/cta.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, InfoCardComponent, CtaComponent],
    imports: [CommonModule, RouterModule, AngularSvgIconModule],
    exports: [HeaderComponent, FooterComponent, InfoCardComponent, CtaComponent]
})
export class CoreModule {}
