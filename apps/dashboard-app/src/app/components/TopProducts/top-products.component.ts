import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-top-products',
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './top-products.component.html',
  styleUrl: './top-products.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TopProductsComponent {
  products = [
    {
      name: 'Home Decor Range',
      popularity: 45,
      sales: 45,
      color: '#0095FF',
    },
    {
      name: 'Disney Princess Pink Bag 18’',
      popularity: 29,
      sales: 29,
      color: '#00E096',
    },
    {
      name: 'Bathroom Essentials',
      popularity: 18,
      sales: 18,
      color: '#884DFF',
    },
    {
      name: 'Apple Smartwatches',
      popularity: 25,
      sales: 25,
      color: '#FF8F0D',
    },
  ];
}
