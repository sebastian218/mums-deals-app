import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../model/product.model';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.scss']
})
export class GridProductsComponent {

  @Input() products: IProduct[] | null = []

}
