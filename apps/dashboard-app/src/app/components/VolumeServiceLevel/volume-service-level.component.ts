import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-volume-service-level',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './volume-service-level.component.html',
  styleUrl: './volume-service-level.component.scss',
})
export class VolumeServiceLevelComponent {
  isBrowser = false;
  volumeValue = 1135;
  serviceValue = 635;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  public barChartType = 'bar' as const;

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Services',
        data: [1135, 1000, 900, 800, 700, 600],
        backgroundColor: '#00E096',
        borderRadius: 2,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
      {
        label: 'Volume',
        data: [635, 500, 400, 300, 200, 100],
        backgroundColor: '#0095FF',
        borderRadius: 2,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };
}
