import { Observable, of } from 'rxjs';

import { Component } from '@angular/core';

import { products } from '../mock.products';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss'],
})
export class ProductListComponent {
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    const productsObservable = this.productService.getProducts();
    const myObserver = {
      next: (x: number) => {
        console.log('Observer got a next value: ' + x);
        // debugger
        this.products = x
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    productsObservable.subscribe(
      myObserver
    );

  }
}
