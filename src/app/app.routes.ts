import { Routes } from '@angular/router';
import { CartPageComponent } from '~/pages/cart';
import { ProductOverviewPageComponent } from '~/pages/product-overview';

export const routes: Routes = [
  { path: '', component: ProductOverviewPageComponent },
  { path: 'cart', component: CartPageComponent },
];
