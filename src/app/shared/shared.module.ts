import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarFiltersComponent } from './components/sidebar-filters/sidebar-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { ActionIconComponent } from './components/action-icon/action-icon.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarFiltersComponent,
    ActionIconComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatIconModule,
    ActionIconComponent,
    MatSelectModule
  ]
})
export class SharedModule { }
