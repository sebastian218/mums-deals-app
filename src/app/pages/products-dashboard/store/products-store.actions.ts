import { createAction, props } from '@ngrx/store';
import { IProduct } from '../model/product.model';

export const fetchProducts = createAction('[Product Dashboard] Fetch products');
export const fetchSuccess = createAction('[Product Dashboard] Fetch success', props<{ products: IProduct[] }>());
export const fetchError = createAction('[Product Dashboard] Fetch error', props<{ error: any[] }>());
export const filterByType = createAction('[Product Dashboard] Filter by type', props<{ filterBy: any }>());
export const changeDisplay = createAction('[Product Dashboard] Change display', props<{ mode: any }>());
export const sortBy = createAction('[Product Dashboard] Sort products', props<{ sort: any }>());