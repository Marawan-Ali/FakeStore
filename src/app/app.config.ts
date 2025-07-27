import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loaderInterceptor } from '../interceptors/loader-interceptor';
import { provideToastr } from 'ngx-toastr';
import { errorHandlingInterceptor } from '../interceptors/error-handling-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      NgxSpinnerModule),
    provideAnimations(),
    provideToastr(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([loaderInterceptor, errorHandlingInterceptor]))
  ],
};
