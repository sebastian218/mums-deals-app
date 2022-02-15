import { Action, createReducer, on } from "@ngrx/store";
import { IProduct } from "../model/product.model";
import { SortOptions } from "../model/sortOptions.enum";
import {
  setDisplay,
  fetchError,
  fetchProducts,
  fetchSuccess,
  sortBy,
  fetchParamsSuccess,
  fetchParams
} from "./products-store.actions";

export const productsSotreSelector = 'productsDashboard';

export enum DisplayType {
  GRID = 'GRID',
  LIST = 'LIST'
}

export interface IProductsDashboardState {
  products: IProduct[],
  fetchPending: boolean,
  fetchError: boolean,
  display: DisplayType,
  types: Set<string>,
  selectedTypes: Set<string>,
  selectedSortBy: SortOptions,
  priceRange: Array<number>,
  selectedPriceRange: Array<number>
}

export const initialState: IProductsDashboardState = {
  products: [],
  fetchPending: true,
  fetchError: false,
  display: DisplayType.GRID,
  types: new Set(),
  selectedTypes: new Set(),
  selectedSortBy: SortOptions.AZ,
  priceRange: [],
  selectedPriceRange: []
}

const productsDashboardReducer = createReducer(
  initialState,
  on(fetchProducts, (state) => ({ ...state, fetchPending: true })),
  on(fetchSuccess, (state, props) => ({
    ...state,
    products: handleSortOptions(state.selectedSortBy, props.products),
    types: getTypes(props.products),
    priceRange: getPriceRange(props.products),
    fetchPending: false
  })),
  on(fetchParams, (store, props) => ({ ...store, selectedPriceRange: props.data.range, selectedTypes: props.data.types, fetchPending: true })),
  on(fetchParamsSuccess, (state, props) => {
    const products = handleSortOptions(state.selectedSortBy, props.products);
    return ({
      ...state,
      products: products,
      fetchPending: false,
    })
  }),
  on(fetchError, (state) => ({ ...state, fetchError: true, fetchPending: false })),
  on(sortBy, (state, props) => ({ ...state, products: handleSortOptions(props.sort, state.products) })),
  on(setDisplay, (state, props) => ({ ...state, display: props.mode }))
);


export function reducer(state: IProductsDashboardState | undefined, action: Action) {
  return productsDashboardReducer(state, action);
}

const getTypes = (products: IProduct[]): Set<string> => {
  let typesSet: Set<string> = new Set();
  products.forEach(prod => {
    typesSet.add(prod.product_type)
  })
  return typesSet;
}

const handleSortOptions = (sort: SortOptions, products: IProduct[]): IProduct[] => {
  if (sort === SortOptions.AZ) {
    return products.map(el => el).sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sort === SortOptions.MIN_TO_MAY) {
    return products.map(el => el).sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sort === SortOptions.MAY_TO_MIN) {
    return products.map(el => el).sort((a, b) => a.title.localeCompare(b.title));
  }
  return products;
}

const getPriceRange = (products: IProduct[]): Array<number> => {
  let priceRange: Array<number> = new Array();

  products.forEach(prod => {
    prod.variants.forEach(variant => {
      priceRange.push(Number(variant.price));
    })
  });

  const max = Math.floor(Math.max(...priceRange));
  const min = Math.floor(Math.min(...priceRange));

  return [min, max];
}
