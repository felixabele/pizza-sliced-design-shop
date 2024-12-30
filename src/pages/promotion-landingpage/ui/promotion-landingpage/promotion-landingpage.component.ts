import { Component, computed, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AddToCartComponent } from '~/features/add-to-cart';
import {
  ProductApiService,
  Product,
  ProductComponent,
} from '~/entities/Product';

@Component({
  selector: 'app-promotion-landingpage',
  imports: [RouterLink, MatButtonModule, AddToCartComponent, ProductComponent],
  templateUrl: './promotion-landingpage.component.html',
  styleUrl: './promotion-landingpage.component.scss',
})
export class PromotionLandingpageComponent {
  private readonly productApiService = inject(ProductApiService);
  private readonly allProducts: Signal<Product[]>;

  public discoutendProducts: Signal<Product[]> = computed(() =>
    this.allProducts().filter(
      (product) => product.oldPrice && product.oldPrice != product.price,
    ),
  );

  constructor() {
    const productsObs = this.productApiService.products();
    this.allProducts = toSignal(productsObs, { initialValue: [] });
  }
}
