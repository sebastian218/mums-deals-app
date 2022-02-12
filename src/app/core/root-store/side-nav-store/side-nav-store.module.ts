import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromSideNavStore from './side-nav-store.redurcer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSideNavStore.sideNavSelector, fromSideNavStore.reducer),
  ]
})
export class SideNavStoreModule { }
