import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {defineCustomElements} from 'ba-democomponents/loader';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
defineCustomElements(window)