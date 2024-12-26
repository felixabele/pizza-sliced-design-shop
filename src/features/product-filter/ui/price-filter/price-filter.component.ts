import { Component, computed, effect, inject } from '@angular/core';
import { ProductFilterService } from '../../model/product-filter.service';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'feature-price-filter',
  imports: [FormsModule, MatSliderModule],
  templateUrl: './price-filter.component.html',
  standalone: true,
})
export class PriceFilterComponent {
  private readonly productFilterService = inject(ProductFilterService);

  public selectedMinPrice?: number;
  public selectedMaxPrice?: number;

  public globalMinPrice = computed(() =>
    this.productFilterService
      .allProducts()
      .reduce((min, p) => Math.min(min, p.price), Infinity),
  );
  public globalMaxPrice = computed(() =>
    this.productFilterService
      .allProducts()
      .reduce((max, p) => Math.max(max, p.price), -Infinity),
  );

  constructor() {
    effect(() => {
      this.selectedMinPrice = this.globalMinPrice();
      this.selectedMaxPrice = this.globalMaxPrice();
    });
  }

  public onPriceChange(): void {
    this.productFilterService.setPriceFilter(
      this.selectedMinPrice,
      this.selectedMaxPrice,
    );
  }
}
