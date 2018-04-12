import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UpgradeModule } from "@angular/upgrade/static";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { Phone } from '../app-js/core/phone';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    HttpModule, 
    UpgradeModule
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
