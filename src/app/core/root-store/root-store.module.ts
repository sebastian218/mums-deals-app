import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './root-store.reducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
