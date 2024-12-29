import { Component, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductFilterComponent } from '~/features/product-filter';
import {
  Product,
  ProductApiService,
  ProductComponent,
} from '~/entities/Product';
import { AddToCartComponent } from '~/features/add-to-cart';

@Component({
  selector: 'app-product-overview-page',
  imports: [ProductComponent, ProductFilterComponent, AddToCartComponent],
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
