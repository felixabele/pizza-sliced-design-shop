import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  model,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Product } from '~/entities/Product';
import { ProductFilterService } from '../../model/product-filter.service';
import { PriceFilterComponent } from '../price-filter/price-filter.component';
import { TagsFilterComponent } from '../tags-filter/tags-filter.component';

@Component({
  selector: 'feature-product-filter',
  imports: [PriceFilterComponent, TagsFilterComponent],
  standalone: true,
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFilterComponent {
  private readonly productFilterService = inject(ProductFilterService);

  public allProducts = input.required<Product[]>();
  public filteredProducts = model<Product[]>();

  constructor() {
    effect(() => this.productFilterService.initProducts(this.allProducts()));

    toObservable(this.productFilterService.filteredProducts).subscribe(
      (products) => this.filteredProducts.set(products),
    );
  }
}
