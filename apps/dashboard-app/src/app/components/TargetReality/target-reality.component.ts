import {
  Component,
  Inject,
  PLATFORM_ID,
  ViewChild,
  OnInit,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { NumbersService } from '@angular-project/data-access';

@Component({
  selector: 'app-target-reality',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './target-reality.component.html',
  styleUrl: './target-reality.component.scss',
})
export class TargetRealityComponent implements OnInit {
  isBrowser = false;
  realitySalesValue = 0;
  targetSalesValue = 0;

  constructor(
    private numbersService: NumbersService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.numbersService.getNumbers(7, 6000, 23000).subscribe({
      next: (nums1) => {
        this.realitySalesValue = Math.max(...nums1);
        this.barChartData.datasets[0].data = nums1;
        this.chart?.update();
      },
      error: (err) => console.error('Err:', err),
    });

    this.numbersService.getNumbers(7, 6000, 23000).subscribe({
      next: (nums2) => {
        this.targetSalesValue = Math.max(...nums2);
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
          color: '#7B91B0',
          font: {
            size: 10,
          },
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          display: false,
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
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    datasets: [
      {
        data: [14500, 17000, 6000, 15500, 13000, 16500, 21000],
        label: 'Reality Sales',
        backgroundColor: '#4AB58E',
        borderRadius: 4,
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        data: [13000, 12000, 23000, 6000, 12000, 14000, 11000],
        label: 'Target Sales',
        backgroundColor: '#FFCF00',
        borderRadius: 4,
        barPercentage: 0.8,
        categoryPercentage: 0.8,
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
