import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ImprintComponent } from './modules/legal/pages/imprint/imprint.component';
import { PrivacyPolicyComponent } from './modules/legal/pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    // legal
    {
        path: 'legal',
        children: [
            {
                path: 'imprint',
                component: ImprintComponent
            },
            {
                path: 'privacy',
                component: PrivacyPolicyComponent
            },
            {
                path: '**',
                redirectTo: '/'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
