import { APP_INITIALIZER, Injector, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { LOCATION_INITIALIZED, registerLocaleData } from '@angular/common';
import esAR from '@angular/common/locales/es-AR';
import { I18nService } from './core/i18n/i18n.service';
import { CoreModule } from './core/core.module';

registerLocaleData(esAR, 'es-Ar');

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', `.json?cacheBuster=${environment.cacheBusterHash}`);
}

export function setupTranslateFactory(
  service: I18nService,
  injector: Injector,
) {

  return () => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        await injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
        service.init().subscribe(
          () => resolve(),
          (err) => {
            console.error(err)
            resolve();
          },
        );
      } catch (err) {
        console.error(err)
        reject();
      }
    });
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-Ar'
    },
    I18nService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [I18nService, Injector],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }
}
