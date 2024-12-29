import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartItem, CartStateService } from '~/entities/Cart';

@Component({
  selector: 'feature-cart-item-quantity',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './cart-item-quantity.component.html',
  styleUrl: './cart-item-quantity.component.scss',
})
export class CartItemQuantityComponent {
  private readonly cartService = inject(CartStateService);
  public readonly cartItem = input.required<CartItem>();

  public increment(): void {
    const { productId, name, price } = this.cartItem();
    this.cartService.addItem(productId, price, name);
  }

  public decrement(): void {
    this.cartService.removeItem(this.cartItem().productId);
  }
}
