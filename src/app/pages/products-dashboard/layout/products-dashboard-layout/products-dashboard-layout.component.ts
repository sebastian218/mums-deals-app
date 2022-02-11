import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProductsDashboardState } from '../../store/products-store.reducer';
import * as fromProducDashboardActions from '../../store/products-store.actions';
@Component({
  selector: 'app-products-dashboard-layout',
  templateUrl: './products-dashboard-layout.component.html',
  styleUrls: ['./products-dashboard-layout.component.scss']
})
export class ProductsDashboardLayoutComponent implements OnInit {

  constructor(private store: Store<IProductsDashboardState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromProducDashboardActions.fetchProducts());
  }

}
