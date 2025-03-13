import { Component, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NumbersService } from '@angular-project/data-access';

@Component({
  selector: 'app-total-revenue',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './total-revenue.component.html',
  styleUrl: './total-revenue.component.scss',
})
export class TotalRevenueComponent implements OnInit {
  isBrowser = false;

  constructor(
    private numbersService: NumbersService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.numbersService.getNumbers(7, 1000, 21000).subscribe({
      next: (nums1) => {
        this.barChartData.datasets[0].data = nums1;
        this.chart?.update();
      },
      error: (err) => console.error('Err:', err),
    });

    this.numbersService.getNumbers(7, 1000, 21000).subscribe({
      next: (nums2) => {
        this.barChartData.datasets[1].data = nums2;
        this.chart?.update();
      },
      error: (err) => console.error('Err:', err),
    });
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
          color: '#fff',
        },

        ticks: {
          color: '#6c757d',
          font: {
            size: 12,
          },
        },
      },
      y: {
        border: {
          color: '#eff1f3',
        },
        grid: {
          display: true,
          color: '#eff1f3',
          lineWidth: 1,
        },
        ticks: {
          callback: (value: string | number) => {
            return value === 0 ? '0' : Number(value) / 1000 + 'k';
          },
          color: '#6c757d',
          font: {
            size: 12,
          },
          stepSize: 5000,
        },
        min: 0,
        max: 25000,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    datasets: [
      {
        data: [14500, 17000, 6000, 15500, 13000, 16500, 21000],
        label: 'Online Sales',
        backgroundColor: '#0095FF',
        borderRadius: 2,
        barPercentage: 0.7,
        categoryPercentage: 0.5,
      },
      {
        data: [13000, 12000, 23000, 6000, 12000, 14000, 11000],
        label: 'Offline Sales',
        backgroundColor: '#00E096',
        borderRadius: 2,
        barPercentage: 0.7,
        categoryPercentage: 0.5,
      },
    ],
  };

  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }
}
