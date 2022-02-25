import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { SortOptions } from '../../model/sortOptions.enum';
import { DisplayType, IProductsDashboardState } from '../../store/products-store.reducer';
import * as fromProductSoreSelectors from '../../store/products-store.selectors';
import * as fromProductStoreActions from '../../store/products-store.actions';
import { toggleSideNav } from 'src/app/core/root-store/side-nav-store/side-nav-store.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  amount$: Observable<number> = this.store.select(fromProductSoreSelectors.selectAmount);
  selectedValue: any = SortOptions.AZ;
  sortItems: any[] = [
    { value: SortOptions.AZ, viewValue: this.translate.instant('TOOLBAR.SORT-OPTIONS.A-Z') },
    { value: SortOptions.MIN_TO_MAY, viewValue: this.translate.instant('TOOLBAR.SORT-OPTIONS.LOWEST-HIGHEST') },
    { value: SortOptions.MAY_TO_MIN, viewValue: this.translate.instant('TOOLBAR.SORT-OPTIONS.HIGHEST-LOWEST') },
  ];

  constructor(public translate: TranslateService, private store: Store<IProductsDashboardState>) { }

  handleDisplay(type: string) {
    const mode = type === 'grid' ? DisplayType.GRID : DisplayType.LIST;
    this.store.dispatch(fromProductStoreActions.setDisplay({ mode }));
  }

  handleSort(e: MatSelectChange) {
    this.store.dispatch(fromProductStoreActions.sortBy({ sort: e.value }))
  }

  handleLangSelect(e: MatSelectChange): void {
    this.translate.use(e.value);
  }

  handleFilter() {
    this.store.dispatch(toggleSideNav());
  }

}
