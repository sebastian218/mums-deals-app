import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarFiltersComponent } from './components/sidebar-filters/sidebar-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { ActionIconComponent } from './components/action-icon/action-icon.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsStoreModule } from '../pages/products-dashboard/store/products-store.module';
import { SibeBareFiltersBaseComponent } from './components/sidebar-filters/base/sidebar-filter.base.component';
import {MatSliderModule} from '@angular/material/slider';
import { LanguageSelectComponent } from './components/language-select/language-select.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarFiltersComponent,
    ActionIconComponent,
    SibeBareFiltersBaseComponent,
    LanguageSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    ProductsStoreModule,
    MatSliderModule
  ],
  exports: [
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatIconModule,
    ActionIconComponent,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    SidebarFiltersComponent,
    SibeBareFiltersBaseComponent,
    MatSliderModule,
    LanguageSelectComponent
  ]
})
export class SharedModule { }
