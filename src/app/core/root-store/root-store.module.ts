import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './root-store.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SideNavStoreModule } from './side-nav-store/side-nav-store.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    SideNavStoreModule
  ]
})
export class RootStoreModule { }
