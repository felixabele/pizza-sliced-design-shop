import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AddToCartComponent } from '~/features/add-to-cart';
import { Product } from '~/entities/Product';
import { TagsComponent } from '~/shared';

@Component({
  selector: 'entity-product-card',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe, TagsComponent, AddToCartComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  public product = input.required<Product>();
}
