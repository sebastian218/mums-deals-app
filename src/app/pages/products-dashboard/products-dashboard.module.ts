import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashboardRoutingModule } from './products-dashboard-routing.module';
import { ProductComponent } from './components/product/product.component';
import { SidebarFiltersComponent } from './components/sidebar-filters/sidebar-filters.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductsDashboardLayoutComponent } from './layout/products-dashboard-layout/products-dashboard-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsStoreModule } from './store/products-store.module';
import { GridProductsComponent } from './components/grid-products/grid-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';



@NgModule({
  declarations: [
    ProductComponent,
    SidebarFiltersComponent,
    ToolbarComponent,
    ProductsDashboardLayoutComponent,
    GridProductsComponent,
    ListProductsComponent,

  ],
  imports: [
    CommonModule,
    ProductsDashboardRoutingModule,
    SharedModule,
    ProductsStoreModule
  ]
})
export class ProductsDashboardModule { }
