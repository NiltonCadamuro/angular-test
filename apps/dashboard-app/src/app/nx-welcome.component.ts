import { NumbersService } from '@angular-project/data-access';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-numbers',
  template: `
    <h3>Números</h3>
    <ul>
      <li *ngFor="let n of numbers">{{ n }}</li>
    </ul>
  `,
  imports: [CommonModule],
})
export class NumbersComponent implements OnInit {
  numbers: number[] = [];

  constructor(private numbersService: NumbersService) {}

  ngOnInit() {
    this.numbersService.getNumbers(5, 1000, 20000).subscribe({
      next: (nums) => {
        this.numbers = nums;
      },
      error: (err) => console.error('Err:', err),
    });
  }
}
