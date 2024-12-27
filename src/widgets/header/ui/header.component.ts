import { Component } from '@angular/core';
import { MiniCartComponent } from '~/features/mini-cart';

@Component({
  selector: 'widget-header',
  imports: [MiniCartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
