import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'feature-mini-cart',
  imports: [MatIconModule, MatBadgeModule],
  styles: ['.shopping-cart { color: #fff; }'],
  templateUrl: './mini-cart.component.html',
})
export class MiniCartComponent {}
