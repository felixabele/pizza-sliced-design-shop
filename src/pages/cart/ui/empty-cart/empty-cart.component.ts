import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cart-page-empty-cart',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './empty-cart.component.html',
})
export class EmptyCartComponent {}
