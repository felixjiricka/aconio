import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ImprintComponent} from './pages/imprint/imprint.component';
import {PrivacyPolicyComponent} from './pages/privacy-policy/privacy-policy.component';
import {TermsOfServiceComponent} from './pages/terms-of-service/terms-of-service.component';

@NgModule({
    declarations: [ImprintComponent, PrivacyPolicyComponent, TermsOfServiceComponent],
    imports: [CommonModule],
    exports: [ImprintComponent, PrivacyPolicyComponent]
})
export class LegalModule {}
