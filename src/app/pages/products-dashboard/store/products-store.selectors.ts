import { createSelector } from '@ngrx/store';
import { IProductsDashboardState } from './products-store.reducer';

export const selectProductDashboardStore = (state: any) => state.productsDashboard;

export const selectDisplayMode = createSelector(
  selectProductDashboardStore,
  (state: IProductsDashboardState) => state.display
)

export const selectFilteredProducts = createSelector(
  selectProductDashboardStore,
  (state: IProductsDashboardState) => state.filteredProducts
)

export const selectAmount = createSelector(
  selectProductDashboardStore,
  (state: IProductsDashboardState) => state.filteredProducts
)