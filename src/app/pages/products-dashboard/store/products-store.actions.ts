import { createAction, props } from '@ngrx/store';
import { IProduct } from '../model/product.model';
import { SortOptions } from '../model/sortOptions.enum';


export const fetchProducts = createAction('[Product Dashboard] Fetch products');
export const fetchProductsByType = createAction('[Product Dashboard] Fetch products by type', props<{ types: Set<string> }>());
export const fetchProductsByTypeSuccess = createAction('[Product Dashboard] Fetch products by type success', props<{ products: IProduct[] }>());
export const fetchSuccess = createAction('[Product Dashboard] Fetch success', props<{ products: IProduct[] }>());
export const fetchError = createAction('[Product Dashboard] Fetch error', props<{ error: any[] }>());
export const changeDisplay = createAction('[Product Dashboard] Change display', props<{ mode: any }>());
export const sortBy = createAction('[Product Dashboard] Sort products', props<{ sort: SortOptions }>());
