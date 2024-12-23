import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  Product,
  ProductApiService,
  ProductCardComponent,
} from '~/entities/Product';

@Component({
  selector: 'app-product-overview-page',
  imports: [ProductCardComponent],
  standalone: true,
  templateUrl: './product-overview-page.component.html',
  styleUrl: './product-overview-page.component.scss',
})
export class ProductOverviewPageComponent {
  public products: Signal<Product[] | undefined>;

  constructor(private productApiService: ProductApiService) {
    const productsObs = this.productApiService.products();
    this.products = toSignal(productsObs);
  }
}
