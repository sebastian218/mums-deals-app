import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  selectedValue: any;
  sortItems: any[] = [
    { value: 'A-Z', viewValue: this.translate.instant('TOOLBAR.SORT-OPTIONS.A-Z') },
    { value: 'low', viewValue: this.translate.instant('TOOLBAR.SORT-OPTIONS.LOWEST-HIGHEST') },
    { value: 'hish', viewValue: this.translate.instant('TOOLBAR.SORT-OPTIONS.HIGHEST-LOWEST') },
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

}
