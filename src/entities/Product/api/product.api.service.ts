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
        name: 'Pizza Mare',
        shortDescription: 'Pizza with delicious fish, cheese and vegetables',
        image: '/assets/products/product-1.jpg',
        price: 100,
        tags: ['fish', 'tomato', 'basil'],
      },
      {
        id: 2,
        name: 'Pizza Prosciutto',
        shortDescription: 'Pizza with delicious ham, cheese and mushrooms',
        image: '/assets/products/product-2.jpg',
        price: 200,
        tags: ['ham', 'mushrooms', 'basil'],
      },
      {
        id: 3,
        name: 'Pizza Salami',
        shortDescription: 'Pizza with delicious salami, cheese and mushrooms',
        image: '/assets/products/product-3.jpg',
        price: 300,
        tags: ['salami', 'mushrooms'],
      },
    ]);
  }
}
