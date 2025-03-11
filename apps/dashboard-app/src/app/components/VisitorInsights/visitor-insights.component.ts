import { Component, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-visitor-insights',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './visitor-insights.component.html',
  styleUrl: './visitor-insights.component.scss',
})
export class VisitorInsightsComponent {
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [250, 200, 300, 280, 320, 350, 200, 150, 380, 220, 300],
        label: 'Loyal Customers',
        borderColor: '#A700FF',
        pointBackgroundColor: '#A700FF',
        pointBorderColor: '#A700FF',
        pointHoverBackgroundColor: '#A700FF',
        pointHoverBorderColor: '#A700FF',
        pointRadius: 0,
        pointHoverRadius: 6,
        borderWidth: 4,
      },
      {
        data: [200, 180, 250, 260, 280, 300, 360, 390, 320, 380, 250],
        label: 'New Customers',
        borderColor: '#EF4444',
        pointBackgroundColor: '#EF4444',
        pointBorderColor: '#EF4444',
        pointHoverBackgroundColor: '#EF4444',
        pointHoverBorderColor: '#EF4444',
        pointRadius: 0,
        pointHoverRadius: 6,
        borderWidth: 4,
      },
      {
        data: [300, 250, 320, 310, 105, 110, 248, 350, 270, 390, 390],
        label: 'Unique Customers',
        borderColor: '#3CD856',
        pointBackgroundColor: '#3CD856',
        pointBorderColor: '#3CD856',
        pointHoverBackgroundColor: '#3CD856',
        pointHoverBorderColor: '#3CD856',
        pointRadius: 0,
        pointHoverRadius: 6,
        borderWidth: 4,
      },
    ],
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Sept',
      'Oct',
      'Nov',
      'Des',
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.5,
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
          color: '#f8f8f9',
        },
        ticks: {
          color: '#464E5F',
          font: {
            size: 10,
            family: 'Epilogue',
          },
        },
      },
      y: {
        position: 'left',
        grid: {
          display: true,
          color: '#f8f8f9',
        },
        min: 0,
        max: 400,
        border: {
          display: false,
        },
        ticks: {
          stepSize: 100,
          color: '#7B91B0',
          font: {
            size: 12,
            family: 'Poppins',
          },
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      crosshair: {
        line: {
          color: '#F64E60',
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
}
