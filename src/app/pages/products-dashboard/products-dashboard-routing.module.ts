import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDashboardLayoutComponent } from './layout/products-dashboard-layout/products-dashboard-layout.component';

const routes: Routes = [
  { path: '', component: ProductsDashboardLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsDashboardRoutingModule { }
