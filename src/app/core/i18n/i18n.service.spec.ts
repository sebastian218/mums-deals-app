import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateTestingModule } from './translate-mock.service';
import { I18nService } from './i18n.service';

describe('i18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateTestingModule
      ],
      providers: [
        Injector,
        I18nService
      ]
    });
  });

  beforeEach(inject(
    [I18nService],
    (_svc: I18nService) => {
      service = _svc;
    }
  ));

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should be take spanish by default', waitForAsync(() => {
    const langExpected = 'es';
    service.init().toPromise().then(() => {
      expect(service.currentLang).toBe(langExpected);
    });
  }));

  it('should be retrieve the list of languages', waitForAsync(() => {
    const expected = ['es', 'en'];
    service.allowedLanguages = expected;
    service.init().toPromise().then(() => {
      expect(service.getLangs()).toBe(expected);
    });
  }));


  it('setLang', () => {
    const setLang = spyOn(service, 'setLang').and.callThrough();
    service.setLang('es');
    expect(setLang).toHaveBeenCalled();
  });
});
