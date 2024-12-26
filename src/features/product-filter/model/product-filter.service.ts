import { computed, Injectable, signal } from '@angular/core';
import { Product } from '~/entities/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductFilterService {
  public filteredProducts = computed(() =>
    this.allProducts().filter((product) => this._matchesPrice(product)),
  );

  private allProducts = signal<Product[]>([]);
  private minPriceFilter = signal<number | undefined>(undefined);
  private maxPriceFilter = signal<number | undefined>(undefined);

  public initProducts(products: Product[]): void {
    this.allProducts.set(products);
  }

  public setPriceFilter(minPrice?: number, maxPrice?: number): void {
    this.minPriceFilter.set(minPrice);
    this.maxPriceFilter.set(maxPrice);
  }

  private _matchesPrice(product: Product): boolean {
    const minPrice = this.minPriceFilter();
    const maxPrice = this.maxPriceFilter();
    const matchesMinPrice = minPrice === undefined || product.price >= minPrice;
    const matchesMaxPrice = maxPrice === undefined || product.price <= maxPrice;

    return matchesMinPrice && matchesMaxPrice;
  }
}
