import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { ConfirmationService, MessageService } from 'primeng/api';
import { primeNGTheme } from '../mytheme';


export const appConfig: ApplicationConfig = {
  providers: [
    ConfirmationService,
    MessageService,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: primeNGTheme,
        options: {
          darkModeSelector: '.app-darkmode',
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities'
          }
        }
      },
      ripple: true,
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes)]
};
