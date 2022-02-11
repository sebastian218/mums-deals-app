import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProductsDashboardState } from '../../store/products-store.reducer';
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

  products$: Observable<IProduct[]> = this.store.select(fromProductSoreSelectors.selectProducts);

  constructor(private store: Store<IProductsDashboardState>) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.store.dispatch(fromProducDashboardActions.fetchProducts());
  }

}
