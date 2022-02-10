import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private readonly _defaultStorageKeyName: string = 'locale';
  defaultLanguage = 'es';
  allowedLanguages = ['es', 'en'];
  regexAllowedLanguages = new RegExp(this.allowedLanguages.join('|'));
  locale = this.defaultLanguage;
  constructor(
    private translate: TranslateService
  ) { }

  init(): Observable<any> {
    this.translate.addLangs(this.allowedLanguages);
    this.translate.setDefaultLang(this.locale);
    return this.translate.use(this.locale);
  }

  get currentLang() {
    return this.translate.currentLang;
  }

  getLangs() {
    return this.translate && this.translate.getLangs();
  }

  setLang(lang: string) {
    this.translate.use(lang);
  }
}
