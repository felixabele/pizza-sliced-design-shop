import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  model,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { Product } from '~/entities/Product';
import { ProductFilterService } from '../../model/product-filter.service';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'feature-product-filter',
  imports: [MatSliderModule, FormsModule],
  standalone: true,
  templateUrl: './product-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFilterComponent {
  private readonly productFilterService = inject(ProductFilterService);

  public allProducts = input.required<Product[]>();
  public filteredProducts = model<Product[]>();

  public selectedMinPrice?: number;
  public selectedMaxPrice?: number;

  public globalMinPrice = computed(() =>
    this.allProducts().reduce((min, p) => Math.min(min, p.price), Infinity),
  );
  public globalMaxPrice = computed(() =>
    this.allProducts().reduce((max, p) => Math.max(max, p.price), -Infinity),
  );

  constructor() {
    effect(() => {
      this.selectedMinPrice = this.globalMinPrice();
      this.selectedMaxPrice = this.globalMaxPrice();
    });

    effect(() => {
      this.productFilterService.initProducts(this.allProducts());
    });

    toObservable(this.productFilterService.filteredProducts).subscribe(
      (products) => this.filteredProducts.set(products),
    );
  }

  public onPriceChange(): void {
    this.productFilterService.setPriceFilter(
      this.selectedMinPrice,
      this.selectedMaxPrice,
    );
  }
}
