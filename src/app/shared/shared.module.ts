import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarFiltersComponent } from './components/sidebar-filters/sidebar-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarFiltersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ],
  exports: [
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ]
})
export class SharedModule { }
