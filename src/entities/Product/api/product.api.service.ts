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
        price: 13,
        oldPrice: 18.0,
        tags: ['fish', 'tomato', 'basil'],
      },
      {
        id: 2,
        name: 'Pizza Prosciutto',
        shortDescription: 'Pizza with delicious ham, cheese and mushrooms',
        image: '/assets/products/product-2.jpg',
        price: 10,
        oldPrice: 13.0,
        tags: ['ham', 'mushrooms', 'basil'],
      },
      {
        id: 3,
        name: 'Pizza Salami',
        shortDescription: 'Pizza with delicious salami, cheese and mushrooms',
        image: '/assets/products/product-3.jpg',
        price: 11,
        tags: ['salami', 'mushrooms'],
      },
      {
        id: 4,
        name: 'Pizza Scampi',
        shortDescription: 'Pizza with delicious shrimp, cheese and mushrooms',
        image: '/assets/products/product-4.jpg',
        price: 15,
        tags: ['shrimp', 'mushrooms'],
      },
      {
        id: 5,
        name: 'Pizza Chicken',
        shortDescription: 'Pizza with delicious chicken, cheese and basil',
        image: '/assets/products/product-5.jpg',
        price: 14,
        tags: ['chicken', 'basil'],
      },
      {
        id: 6,
        name: 'Pizza Hot-Spice',
        shortDescription: 'Pizza with hot salami, jalapeños and cheese',
        image: '/assets/products/product-6.jpg',
        price: 12,
        tags: ['salami', 'chilies'],
      },
    ]);
  }
}
