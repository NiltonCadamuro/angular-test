import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { KFormat } from '@angular-project/ui';

@Component({
  selector: 'app-total-sales-graph-card',
  imports: [CommonModule, MatCardModule, KFormat],
  templateUrl: './total-sales-graph-card.component.html',
  styleUrl: './total-sales-graph-card.component.scss',
})
export class TotalSalesGraphCardComponent {
  @Input() classPersonalized = '';
  @Input() icon = '';
  @Input() value = '';
  @Input() title = '';
  @Input() text = '';
  @Input() backgroundColor = '';
}
