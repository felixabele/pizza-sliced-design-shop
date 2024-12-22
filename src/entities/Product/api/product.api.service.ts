import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  public products(): Observable<Product[]> {
    return of([
      {
        id: 1,
        name: 'Product 1',
        shortDescription: 'Description for product 1',
        image: '/assets/products/product-1.jpg',
        price: 100,
      },
      {
        id: 2,
        name: 'Product 2',
        shortDescription: 'Description for product 2',
        image: '/assets/products/product-2.jpg',
        price: 200,
      },
      {
        id: 3,
        name: 'Product 3',
        shortDescription: 'Description for product 3',
        image: '/assets/products/product-3.jpg',
        price: 300,
      },
    ]);
  }
}
