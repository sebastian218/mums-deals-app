import { DecimalPipe } from '@angular/common';
import { Component, Inject, Input, LOCALE_ID } from '@angular/core';
import { IProduct } from '../../model/product.model';
DecimalPipe
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {


  @Input() products: IProduct[] | null = [];
  @Input() loading: boolean | null = false;

  constructor(@Inject(LOCALE_ID) public locale: string) {

  }


}
