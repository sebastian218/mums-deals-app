import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromProductsStore from './products-store.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductDashboardEffects } from './products-store.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProductsStore.productsSotreSelector, fromProductsStore.reducer),
    EffectsModule.forFeature([ProductDashboardEffects])
  ]
})
export class ProductsStoreModule { }
