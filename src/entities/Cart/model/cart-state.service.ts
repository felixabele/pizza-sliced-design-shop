import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { LocalStorageService } from '~/shared/api';
import { CartItem } from './cart.model';

const LOCAL_STORAGE_KEY = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartStateService {
  private readonly localStoreService = inject(LocalStorageService);

  constructor() {
    this._restoreCart();
  }

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
    this._persistCart();
  }

  public removeItem(productId: number): void {
    const itemsInCart = [...this.cartItems()];

    const matchingIndex = itemsInCart.findIndex(
      (item) => item.productId === productId,
    );

    const matchingItem = itemsInCart[matchingIndex];

    // remove from cart if quantity is 1 else decrement quantity
    if (matchingItem.quantity === 1) {
      itemsInCart.splice(matchingIndex, 1);
    } else {
      matchingItem.quantity -= 1;
      matchingItem.sum = matchingItem.quantity * matchingItem.price;
    }

    this.cartItems.set(itemsInCart);
    this._persistCart();
  }

  private _persistCart(): void {
    this.localStoreService.setItem(LOCAL_STORAGE_KEY, this.cartItems());
  }

  private _restoreCart(): void {
    const cartItems = this.localStoreService.getItem(LOCAL_STORAGE_KEY);
    this.cartItems.set(cartItems || []);
  }
}
