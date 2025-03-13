import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NumbersService } from '@angular-project/data-access';

@Component({
  selector: 'app-top-products',
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './top-products.component.html',
  styleUrl: './top-products.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TopProductsComponent implements OnInit {
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

  constructor(private numbersService: NumbersService) {}

  ngOnInit() {
    this.numbersService.getNumbers(5, 0, 100).subscribe({
      next: (nums) => {
        this.products.map((product, index) => {
          product.sales = nums[index];
          product.popularity = Math.floor((nums[index] / 100) * 100);
        });
      },
      error: (err) => console.error('Err:', err),
    });
  }
}
