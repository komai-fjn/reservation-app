import { Component } from '@angular/core';

import { products } from '../mock.products';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss'],
})
export class ProductListComponent {
  products:any;
  ngOnInit() {
    this.products = products;
  }
}
