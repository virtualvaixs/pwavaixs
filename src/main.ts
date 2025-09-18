import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(), // activo en prod
    }),
  ],
});
