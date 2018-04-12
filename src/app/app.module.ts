import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UpgradeModule } from "@angular/upgrade/static";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { Phone } from '../app-js/core/phone';
import { PhoneListComponent } from '../app-js/phone-list';

@NgModule({
  imports: [
    BrowserModule, 
    UpgradeModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PhoneListComponent
  ],
  entryComponents: [
    PhoneListComponent
  ],
  providers: [
    Phone
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}
