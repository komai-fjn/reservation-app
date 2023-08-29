import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../mock.products';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:any;
  constructor(private route: ActivatedRoute,
    private productservice:ProductService){
  }

  ngOnInit(){
    const myObserver = {
      next: (x:any) => {
        console.log('Observer got a next value: ' + x);
        // debugger
        this.product = x;
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.route.paramMap.subscribe(params => {
      // this.product = this.productservice.findById(params.get("productId")!)
      const productObservable = this.productservice.findById(
        params.get('productId')!
      );
      productObservable.subscribe(
        myObserver
      )
    });
  }
}
