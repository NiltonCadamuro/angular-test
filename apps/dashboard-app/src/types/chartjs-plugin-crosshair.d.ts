import 'chart.js';
import 'chartjs-plugin-crosshair';

declare module 'chart.js' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface PluginOptionsByType<TType extends keyof ChartTypeRegistry> {
    crosshair?: {
      line?: {
        color?: string;
        width?: number;
        dashPattern?: number[];
      };
      sync?: {
        enabled?: boolean;
        group?: number;
        suppressTooltips?: boolean;
      };
      zoom?: {
        enabled?: boolean;
        zoomboxBackgroundColor?: string;
        zoomboxBorderColor?: string;
      };
      snap?: {
        enabled?: boolean;
      };
    };
  }
}
