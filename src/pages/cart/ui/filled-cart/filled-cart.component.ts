import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CartItemQuantityComponent } from '~/features/cart-item-quantity';
import { CartStateService } from '~/entities/Cart';

@Component({
  selector: 'page-cart-page-filled-cart',
  imports: [MatTableModule, CurrencyPipe, CartItemQuantityComponent],
  templateUrl: './filled-cart.component.html',
})
export class FilledCartComponent {
  public readonly cartService = inject(CartStateService);

  public displayedColumns: string[] = ['name', 'quantity', 'price', 'sum'];
}
