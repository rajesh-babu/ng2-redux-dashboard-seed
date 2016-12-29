/**
 * Dashboard App: Main
 * @contrib Rajesh Thoghuluva
 * @version 1.0.0
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
