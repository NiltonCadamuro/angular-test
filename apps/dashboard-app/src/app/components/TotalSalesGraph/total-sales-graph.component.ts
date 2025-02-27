import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalSalesGraphCardComponent } from './Card/total-sales-graph-card.component';

@Component({
  selector: 'app-total-sales-graph',
  imports: [CommonModule, TotalSalesGraphCardComponent],
  templateUrl: './total-sales-graph.component.html',
  styleUrl: './total-sales-graph.component.scss',
})
export class TotalSalesGraphComponent {
  @Input() items: {
    icon: string;
    value: string;
    title: string;
    text: string;
    backgroundColor: string;
    classPersonalized: string;
  }[] = [];

  trackByFn(index: number): number {
    return index;
  }
}
