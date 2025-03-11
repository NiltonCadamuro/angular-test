import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-customer-satisfaction',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './customer-satisfaction.component.html',
  styleUrl: './customer-satisfaction.component.scss',
})
export class CustomerSatisfactionComponent implements AfterViewInit {
  isBrowser = false;
  higherValueLastMonth = 3004;
  higherValueThisMonth = 4504;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        label: 'Last Month',
        data: [3004, 2800, 3500, 3200, 3800, 4000, 3500],
        borderColor: '#007dd6',
        backgroundColor: 'rgba(76, 155, 253, 0.2)',
        pointBackgroundColor: '#0095FF',
        pointBorderColor: '#0095FF',
        pointBorderWidth: 3,
        pointHoverBorderWidth: 4,
        borderWidth: 3,
        fill: true,
      },
      {
        label: 'This Month',
        data: [4504, 4000, 4200, 4500, 4800, 5000, 5200],
        borderColor: '#05b278',
        backgroundColor: 'rgb(41, 204, 150, 0.2)',
        pointBackgroundColor: '#07E098',
        pointBorderColor: '#07E098',
        pointBorderWidth: 3,
        pointHoverBorderWidth: 4,
        borderWidth: 3,
        fill: true,
      },
    ],
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.3,
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        position: 'left',
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      crosshair: {
        line: {
          color: '#7B91B0',
          width: 1,
          dashPattern: [3, 3],
        },
        sync: {
          enabled: false,
        },
        zoom: {
          enabled: false,
        },
        snap: {
          enabled: true,
        },
      },
      annotation: {
        annotations: [],
      },
    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // events
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

  ngAfterViewInit(): void {
    if (this.chart && this.chart.chart && this.isBrowser) {
      const ctx = this.chart.chart.ctx;

      const gradient1 = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient1.addColorStop(0, '#aae1f9');
      gradient1.addColorStop(1, '#ffffff');

      const gradient2 = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient2.addColorStop(0, '#cdf9ea');
      gradient2.addColorStop(1, '#ffffff');

      this.lineChartData.datasets[0].backgroundColor = gradient1;
      this.lineChartData.datasets[1].backgroundColor = gradient2;

      this.chart.update();
    }
  }
}
