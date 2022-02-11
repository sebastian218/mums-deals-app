import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProductsDashboardState } from '../../store/products-store.reducer';
import * as fromProductSoreSelectors from '../../store/products-store.selectors';
import * as fromProductStoreActions from '../../store/products-store.actions';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-sidebar-filters',
  templateUrl: './sidebar-filters.component.html',
  styleUrls: ['./sidebar-filters.component.scss']
})
export class SidebarFiltersComponent {

  typesOptions$: Observable<Set<string>> = this.store.select(fromProductSoreSelectors.selectTypes);
  selectedTypes: Set<string> = new Set();

  constructor(private store: Store<IProductsDashboardState>) { }

  handleCheck(e: MatCheckboxChange, item: any) {
    if (e.checked) {
      this.selectedTypes.add(item)
    } else {
      this.selectedTypes.delete(item);
    }
    this.store.dispatch(fromProductStoreActions.fetchProductsByType({ types: this.selectedTypes }));
  }

}
