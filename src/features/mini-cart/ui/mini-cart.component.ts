import { Component, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartStateService } from '~/entities/Cart';

@Component({
  selector: 'feature-mini-cart',
  imports: [MatIconModule, MatBadgeModule, RouterLink],
  styles: ['.shopping-cart { color: #fff; }'],
  templateUrl: './mini-cart.component.html',
})
export class MiniCartComponent {
  public readonly cartService = inject(CartStateService);
}
