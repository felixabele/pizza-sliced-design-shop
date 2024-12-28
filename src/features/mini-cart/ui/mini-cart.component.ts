import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CartStateService } from '~/entities/Cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'feature-mini-cart',
  imports: [MatIconModule, MatBadgeModule, RouterLink],
  styles: ['.shopping-cart { color: #fff; }'],
  templateUrl: './mini-cart.component.html',
})
export class MiniCartComponent {
  public readonly cartService = inject(CartStateService);
}
