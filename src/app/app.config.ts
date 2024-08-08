import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { BookReducer } from './books/book.reducer';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { BookEffects } from './books/book.effect';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ book: BookReducer }),
    provideEffects([BookEffects]),
    StoreDevtoolsModule.instrument()
  ],
};
