import { Routes } from '@angular/router';
import { CartPageComponent } from '~/pages/cart';
import { ProductOverviewPageComponent } from '~/pages/product-overview';
import { PromotionLandingpageComponent } from '~/pages/promotion-landingpage';

export const routes: Routes = [
  { path: '', component: ProductOverviewPageComponent },
  { path: 'promotions', component: PromotionLandingpageComponent },
  { path: 'cart', component: CartPageComponent },
];
