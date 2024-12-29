import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CartStateService } from '~/entities/Cart';
import { Product } from '~/entities/Product';

@Component({
  selector: 'feature-add-to-cart',
  imports: [MatButtonModule],
  template: `<button mat-button (click)="addToCart()">Add to Cart</button>`,
})
export class AddToCartComponent {
  private readonly cartService = inject(CartStateService);
  product = input.required<Product>();

  public addToCart() {
    const { id, name, price } = this.product();
    this.cartService.addItem(id, price, name);
  }
}
