import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarFiltersComponent } from './sidebar-filters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarFiltersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ]
})
export class SideBarFiltersModule { }
