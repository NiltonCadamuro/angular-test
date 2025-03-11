import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import annotationPlugin from 'chartjs-plugin-annotation';
import CrosshairPlugin from 'chartjs-plugin-crosshair';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

Chart.register(annotationPlugin);

Chart.register(CrosshairPlugin);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

platformBrowserDynamic()
  .bootstrapModule(AppComponent)
  .catch((err) => console.error(err));
