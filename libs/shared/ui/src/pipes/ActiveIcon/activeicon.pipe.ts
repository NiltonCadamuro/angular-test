import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeIcon',
  standalone: true,
})
export class ActiveIcon implements PipeTransform {
  transform(value: string): string {
    return value.replace('.png', '-active.png');
  }
}
