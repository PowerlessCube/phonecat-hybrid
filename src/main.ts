import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { UpgradeModule } from "@angular/upgrade/static";
import { AppModule } from "./app/app.module";

// Angular JS
import "angular";
import "angular-resource";
import "angular-route";

import { environment } from "./environments/environment";

// AngularJS App
import "./app-js";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement, ["phonecatApp"]);
  })
  .catch(err => console.log(err));
