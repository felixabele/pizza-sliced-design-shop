import { Component, inject } from '@angular/core';
import { CartStateService } from '~/entities/Cart';
import { EmptyCartComponent } from '../empty-cart/empty-cart.component';
import { FilledCartComponent } from '../filled-cart/filled-cart.component';

@Component({
  selector: 'app-cart-page',
  imports: [EmptyCartComponent, FilledCartComponent],
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent {
  public readonly cartService = inject(CartStateService);
}
