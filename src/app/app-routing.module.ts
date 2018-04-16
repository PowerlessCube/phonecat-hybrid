import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { PhoneDetailComponent } from "../app-js/phone-detail";
import { PhoneListComponent } from "../app-js/phone-list";

const routes: Routes = [
    { path: '', redirectTo: 'phones', pathMatch: 'full' },
    { path: 'phones', component: PhoneListComponent },
    { path: 'phones/:phoneId', component: PhoneDetailComponent }
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        { provide: APP_BASE_HREF, useValue: '!' },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ]
})
export class AppRoutingModule { }