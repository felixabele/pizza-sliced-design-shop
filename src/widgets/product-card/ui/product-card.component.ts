import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { Product } from '~/entities/Product';
import { TagsComponent } from '~/shared';
import { AddToCartComponent } from '~/features/add-to-cart';

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
