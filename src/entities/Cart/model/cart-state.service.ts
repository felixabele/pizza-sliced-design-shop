import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { CartItem } from './cart.model';
import { LocalStorageService } from '~/shared/api';

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

  private _persistCart(): void {
    this.localStoreService.setItem(LOCAL_STORAGE_KEY, this.cartItems());
  }

  private _restoreCart(): void {
    const cartItems = this.localStoreService.getItem(LOCAL_STORAGE_KEY);
    this.cartItems.set(cartItems || []);
  }
}
