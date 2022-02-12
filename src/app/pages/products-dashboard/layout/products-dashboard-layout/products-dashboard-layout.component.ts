import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DisplayType, IProductsDashboardState } from '../../store/products-store.reducer';
import * as fromProducDashboardActions from '../../store/products-store.actions';
import { Observable } from 'rxjs';
import { IProduct } from '../../model/product.model';
import * as fromProductSoreSelectors from '../../store/products-store.selectors';

@Component({
  selector: 'app-products-dashboard-layout',
  templateUrl: './products-dashboard-layout.component.html',
  styleUrls: ['./products-dashboard-layout.component.scss']
})

export class ProductsDashboardLayoutComponent implements OnInit {

  readonly listMode = DisplayType.LIST;
  readonly gridMode = DisplayType.GRID;
  products$: Observable<IProduct[]> = this.store.select(fromProductSoreSelectors.selectProducts);
  fetchPending$: Observable<boolean> = this.store.select(fromProductSoreSelectors.selectFetchPending);
  displayMode$: Observable<DisplayType> = this.store.select(fromProductSoreSelectors.selectDisplayMode);

  constructor(private store: Store<IProductsDashboardState>) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.store.dispatch(fromProducDashboardActions.fetchProducts());
  }

}
