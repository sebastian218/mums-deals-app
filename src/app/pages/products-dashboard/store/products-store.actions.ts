import { createAction, props } from '@ngrx/store';
import { IProduct } from '../model/product.model';
import { SortOptions } from '../model/sortOptions.enum';
import { DisplayType } from './products-store.reducer';


export const fetchProducts = createAction('[Product Dashboard] Fetch products');
export const fetchProductsByType = createAction('[Product Dashboard] Fetch products by type', props<{ types: Set<string> }>());
export const fetchProductsByTypeSuccess = createAction('[Product Dashboard] Fetch products by type success', props<{ products: IProduct[] }>());
export const fetchProductsByPrice = createAction('[Product Dashboard] Fetch products by price', props<{ range: Array<number> }>());
export const fetchSuccess = createAction('[Product Dashboard] Fetch success', props<{ products: IProduct[] }>());
export const fetchError = createAction('[Product Dashboard] Fetch error', props<{ error: any[] }>());
export const setDisplay = createAction('[Product Dashboard] Change display', props<{ mode: DisplayType }>());
export const sortBy = createAction('[Product Dashboard] Sort products', props<{ sort: SortOptions }>());
