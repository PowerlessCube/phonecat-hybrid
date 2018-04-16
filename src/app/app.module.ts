import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CheckmarkPipe } from "../app-js/core";
import { Phone } from '../app-js/core/phone';
import { PhoneListComponent } from '../app-js/phone-list';
import { PhoneDetailComponent } from "../app-js/phone-detail";

@NgModule({
  imports: [
    BrowserModule, 
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
