import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routeTitle',
  standalone: true,
})
export class RouteTitle implements PipeTransform {
  transform(value: string): string {
    return value.replace('/', '').replace('-', ' ');
  }
}
