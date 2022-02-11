import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarFiltersComponent } from './components/sidebar-filters/sidebar-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { ActionIconComponent } from './components/action-icon/action-icon.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
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
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
