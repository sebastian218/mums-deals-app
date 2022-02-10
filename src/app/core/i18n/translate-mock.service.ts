import { EventEmitter, Injectable, NgModule, Pipe, PipeTransform } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

const translations: any = {};

export class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

@Pipe({
  name: 'translate'
})
export class TranslatePipeMock implements PipeTransform {
  public name = 'translate';

  public transform(query: string, ...args: any[]): any {
    return query;
  }
}

@Injectable()
export class TranslateServiceStub {
  currentLang: any;
  langs = [];

  public onLangChange = new EventEmitter<any>();
  public onTranslationChange = new EventEmitter<any>();
  public onDefaultLangChange = new EventEmitter<any>();

  public get<T>(key: T): Observable<T> {
    return of(key);
  }
  public getLangs() {
    return this.langs;
  }

  public addLangs(arrLangs: any) {
    this.langs = arrLangs;
  }

  public setDefaultLang(lang: any) {
    this.currentLang = lang;
  }

  public use(lang: any): Observable<any> {
    // TODO: add http to read assets...
    return of({});
  }

  public instant(text: string): string {
    return text;
  }

  public setTranslation(lang: any, object: any) { }
}

@NgModule({
  declarations: [
    TranslatePipeMock
  ],
  providers: [
    { provide: TranslateService, useClass: TranslateServiceStub },
    { provide: TranslatePipe, useClass: TranslatePipeMock }
  ],
  imports: [
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: FakeLoader }
    })
  ],
  exports: [
    TranslatePipeMock,
    TranslateModule
  ]
})
export class TranslateTestingModule { }
