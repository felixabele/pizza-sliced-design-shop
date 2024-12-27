import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../model/product.model';
import { CurrencyPipe } from '@angular/common';
import { TagsComponent } from '~/shared';

@Component({
  selector: 'entity-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CurrencyPipe, TagsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  public product = input.required<Product>();
}
