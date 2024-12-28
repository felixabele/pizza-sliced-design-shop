import { Component, inject } from '@angular/core';
import { CartStateService } from '~/entities/Cart';
import { MatTableModule } from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'cart-page-filled-cart',
  imports: [MatTableModule, CurrencyPipe],
  templateUrl: './filled-cart.component.html',
})
export class FilledCartComponent {
  public readonly cartService = inject(CartStateService);

  public displayedColumns: string[] = ['name', 'quantity', 'price', 'sum'];
}
