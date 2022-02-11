import { createSelector } from '@ngrx/store';
import { IProductsDashboardState } from './products-store.reducer';

export const selectProductDashboardStore = (state: any) => state.productsDashboard;

export const selectDisplayMode = createSelector(
  selectProductDashboardStore,
  (state: IProductsDashboardState) => state.display
)

export const selectProducts = createSelector(
  selectProductDashboardStore,
  (state: IProductsDashboardState) => state.products
)

export const selectAmount = createSelector(
  selectProductDashboardStore,
  (state: IProductsDashboardState) => state.products?.length
)

export const selectTypes = createSelector(
  selectProductDashboardStore,
  (state: IProductsDashboardState) => state.types
)

export const selectSelectedTypes = createSelector(
  selectProductDashboardStore,
  (state: IProductsDashboardState) => state.selectedTypes
)

export const selectSortBy = createSelector(
  selectProductDashboardStore,
  (state: IProductsDashboardState) => state.selectedSortBy
)

export const selectFetchParams = createSelector(
  selectProductDashboardStore,
  (state: IProductsDashboardState) => {
    return {
      sortBy: state.selectedSortBy,
      filterBy: state.selectedTypes
    }
  }
)