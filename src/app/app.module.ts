import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UpgradeModule } from "@angular/upgrade/static";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { Phone } from '../app-js/core/phone';
import { PhoneListComponent } from '../app-js/phone-list';
import { PhoneDetailComponent } from "../app-js/phone-detail";
import { routeParamsProvider } from '../app-js/ajs-upgraded-providers';
import { AppRoutingModule } from "./app-routing.module";
import { CheckmarkPipe } from "../app-js/core";

@NgModule({
  imports: [
    BrowserModule, 
    UpgradeModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  entryComponents: [
    PhoneListComponent,
    PhoneDetailComponent
  ],
  providers: [
    Phone,
    routeParamsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}
