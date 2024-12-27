import { computed, Injectable, signal } from '@angular/core';
import { Product } from '~/entities/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductFilterService {
  public filteredProducts = computed(() =>
    this.allProducts().filter(
      (product) => this._matchesPrice(product) && this._matchesTags(product),
    ),
  );

  public readonly allProducts = signal<Product[]>([]);
  public tagsFilter = signal<string[]>([]);
  private minPriceFilter = signal<number | undefined>(undefined);
  private maxPriceFilter = signal<number | undefined>(undefined);

  public initProducts(products: Product[]): void {
    this.allProducts.set(products);
  }

  public setPriceFilter(minPrice?: number, maxPrice?: number): void {
    this.minPriceFilter.set(minPrice);
    this.maxPriceFilter.set(maxPrice);
  }

  public addFilterTag(tag: string): void {
    this.tagsFilter.update((tags) => [...tags, tag]);
  }

  public removeFilterTag(tag: string): void {
    this.tagsFilter.update((tags) => tags.filter((t) => t !== tag));
  }

  private _matchesPrice(product: Product): boolean {
    const minPrice = this.minPriceFilter();
    const maxPrice = this.maxPriceFilter();
    const matchesMinPrice = minPrice === undefined || product.price >= minPrice;
    const matchesMaxPrice = maxPrice === undefined || product.price <= maxPrice;

    return matchesMinPrice && matchesMaxPrice;
  }

  private _matchesTags(product: Product): boolean {
    const selectedTags = this.tagsFilter();
    return (
      selectedTags.length === 0 ||
      selectedTags.every((tag) => product.tags.includes(tag))
    );
  }
}
