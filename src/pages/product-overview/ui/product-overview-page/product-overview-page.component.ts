import { Component, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product, ProductApiService } from '~/entities/Product';
import { ProductFilterComponent } from '~/features/product-filter';
import { ProductCardComponent } from '~/widgets';

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
