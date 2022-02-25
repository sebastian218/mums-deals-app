import { Component, OnDestroy } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
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
export class ToolbarComponent implements OnDestroy {

  amount$: Observable<number> = this.store.select(fromProductSoreSelectors.selectAmount);
  selectedValue: any = SortOptions.AZ;
  sortItems: any[] = this._sortItems;
  subscription: Subscription = this.handleTrsanslateChange();

  constructor(public translate: TranslateService, private store: Store<IProductsDashboardState>) {
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private get _sortItems(): { value: SortOptions, viewValue: Observable<any> }[] {
    return [
      { value: SortOptions.AZ, viewValue: this.translate.instant('TOOLBAR.SORT-OPTIONS.A-Z') },
      { value: SortOptions.MIN_TO_MAY, viewValue: this.translate.instant('TOOLBAR.SORT-OPTIONS.LOWEST-HIGHEST') },
      { value: SortOptions.MAY_TO_MIN, viewValue: this.translate.instant('TOOLBAR.SORT-OPTIONS.HIGHEST-LOWEST') },
    ];
  }

  handleDisplay(type: string) {
    const mode = type === 'grid' ? DisplayType.GRID : DisplayType.LIST;
    this.store.dispatch(fromProductStoreActions.setDisplay({ mode }));
  }

  handleSort(e: MatSelectChange) {
    console.log(e);
    this.store.dispatch(fromProductStoreActions.sortBy({ sort: e.value }))
  }

  handleLangSelect(e: MatSelectChange): void {
    this.translate.use(e.value);
  }

  handleFilter() {
    this.store.dispatch(toggleSideNav());
  }

  private handleTrsanslateChange(): Subscription {
    return this.translate.onLangChange.subscribe(val => {
      this.sortItems = this._sortItems;
    })
  }

}
