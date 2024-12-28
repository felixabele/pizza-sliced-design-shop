import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MiniCartComponent } from '~/features/mini-cart';

@Component({
  selector: 'widget-header',
  imports: [MiniCartComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
