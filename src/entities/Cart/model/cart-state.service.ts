import { computed, effect, Injectable, Signal, signal } from '@angular/core';
import { CartItem } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartStateService {
  public cartItems = signal<CartItem[]>([]);
  public totalPrice: Signal<number> = computed(() => {
    return this.cartItems().reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
  });
  public itemCount: Signal<number> = computed(() => {
    return this.cartItems().reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  });

  public addItem(productId: number, price: number, name: string): void {
    const itemsInCart = [...this.cartItems()];
    const existingItem = itemsInCart.find(
      (cartItem) => cartItem.productId === productId,
    );

    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.sum = existingItem.quantity * existingItem.price;
    } else {
      itemsInCart.push({ productId, price, name, quantity: 1, sum: price });
    }

    this.cartItems.set(itemsInCart);
  }
}
