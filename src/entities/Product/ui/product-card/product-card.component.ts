import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../model/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'entity-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() public product?: Product;
}
