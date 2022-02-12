import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../model/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {

  @Input() products: IProduct[] | null = []


}
