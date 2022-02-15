import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashboardRoutingModule } from './products-dashboard-routing.module';
import { SidebarFiltersComponent } from './components/sidebar-filters/sidebar-filters.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductsDashboardLayoutComponent } from './layout/products-dashboard-layout/products-dashboard-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsStoreModule } from './store/products-store.module';
import { GridProductsComponent } from './components/grid-products/grid-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { GridSkeletonsComponent } from './components/grid-skeletons/grid-skeletons.component';
import { ListSkeletonsComponent } from './components/list-skeletons/list-skeletons.component';



@NgModule({
  declarations: [
    SidebarFiltersComponent,
    ToolbarComponent,
    ProductsDashboardLayoutComponent,
    GridProductsComponent,
    ListProductsComponent,
    GridSkeletonsComponent,
    ListSkeletonsComponent,
  ],
  imports: [
    CommonModule,
    ProductsDashboardRoutingModule,
    SharedModule,
    ProductsStoreModule
  ]
})
export class ProductsDashboardModule { }
