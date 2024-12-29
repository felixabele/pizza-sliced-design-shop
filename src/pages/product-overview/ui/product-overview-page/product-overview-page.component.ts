import { Component, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductFilterComponent } from '~/features/product-filter';
import { Product, ProductApiService } from '~/entities/Product';
import { ProductCardComponent } from '~/widgets/product-card';

@Component({
  selector: 'app-product-overview-page',
  imports: [ProductCardComponent, ProductFilterComponent],
  standalone: true,
  templateUrl: './product-overview-page.component.html',
  styleUrl: './product-overview-page.component.scss',
})
export class ProductOverviewPageComponent {
  public allProducts: Signal<Product[]>;
  public filteredProducts = signal<Product[]>([]);

  constructor(private readonly productApiService: ProductApiService) {
    const productsObs = this.productApiService.products();
    this.allProducts = toSignal(productsObs, { initialValue: [] });
  }
}
