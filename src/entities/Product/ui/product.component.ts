import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '~/entities/Product';
import { TagsComponent } from '~/shared/ui';

@Component({
  selector: 'entity-product',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe, TagsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  public product = input.required<Product>();
}
