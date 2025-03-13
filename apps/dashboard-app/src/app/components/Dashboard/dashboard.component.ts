import { GraphcardComponent } from '@angular-project/ui';
import { Component, OnInit } from '@angular/core';
import { TotalSalesGraphComponent } from '../TotalSalesGraph/total-sales-graph.component';
import { VisitorInsightsComponent } from '../VisitorInsights/visitor-insights.component';
import { TotalRevenueComponent } from '../TotalRevenue/total-revenue.component';
import { CustomerSatisfactionComponent } from '../CustomerSatisfaction/customer-satisfaction.component';
import { TargetRealityComponent } from '../TargetReality/target-reality.component';
import { TopProductsComponent } from '../TopProducts/top-products.component';
import { SalesMapComponent } from '../SalesMap/sales-map.component';
import { VolumeServiceLevelComponent } from '../VolumeServiceLevel/volume-service-level.component';
import { NumbersService } from '@angular-project/data-access';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    GraphcardComponent,
    TotalSalesGraphComponent,
    VisitorInsightsComponent,
    TotalRevenueComponent,
    CustomerSatisfactionComponent,
    TargetRealityComponent,
    TopProductsComponent,
    SalesMapComponent,
    VolumeServiceLevelComponent,
  ],
  providers: [CurrencyPipe],
})
export class DashboardComponent implements OnInit {
  items = [
    {
      icon: '/graph-images/todays-sales/total-sales-icon.png',
      value: '$1k',
      title: 'Total Sales',
      text: '+8% from yesterday',
      backgroundColor: '#FFE2E5',
      classPersonalized: 'total-sales-card',
    },
    {
      icon: '/graph-images/todays-sales/total-orders-icon.png',
      value: '300',
      title: 'Total Order',
      text: '+5% from yesterday',
      backgroundColor: '#FFF4DE',
      classPersonalized: 'total-order-card',
    },
    {
      icon: '/graph-images/todays-sales/product-sold-icon.png',
      value: '5',
      title: 'Product Sold',
      text: '+1,2% from yesterday',
      backgroundColor: '#DCFCE7',
      classPersonalized: 'product-sold-card',
    },
    {
      icon: '/graph-images/todays-sales/new-customers-icon.png',
      value: '8',
      title: 'New Customers',
      text: '0,5% from yesterday',
      backgroundColor: '#F3E8FF',
      classPersonalized: 'new-customers-card',
    },
  ];

  constructor(private numbersService: NumbersService) {}

  ngOnInit() {
    this.numbersService.getNumbers(4, 1, 10000).subscribe({
      next: (nums) => {
        this.items.map((item, index) => {
          item.value = nums[index].toString();
          item.text = `+${Math.floor(Math.random() * 10)}% from yesterday`;
        });
      },
      error: (err) => console.error('Err:', err),
    });
  }
}
