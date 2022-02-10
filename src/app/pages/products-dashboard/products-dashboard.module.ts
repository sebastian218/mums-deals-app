import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashboardRoutingModule } from './products-dashboard-routing.module';
import { ProductComponent } from './components/product/product.component';
import { SidebarFiltersComponent } from './components/sidebar-filters/sidebar-filters.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductsDashboardLayoutComponent } from './layout/products-dashboard-layout/products-dashboard-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductComponent,
    SidebarFiltersComponent,
    ToolbarComponent,
    ProductsDashboardLayoutComponent,

  ],
  imports: [
    CommonModule,
    ProductsDashboardRoutingModule,
    SharedModule
  ]
})
export class ProductsDashboardModule { }
