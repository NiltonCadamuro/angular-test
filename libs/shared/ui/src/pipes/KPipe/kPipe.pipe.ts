import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kFormat',
})
export class KFormat implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) {}

  transform(
    value: number | string,
    currencyCode = 'USD',
    display: 'code' | 'symbol' | 'symbol-narrow' | string = 'symbol',
    digitsInfo = '1.0-0'
  ): string {
    const num = typeof value === 'number' ? value : parseFloat(value);
    if (isNaN(num)) {
      return '';
    }

    if (num >= 1000) {
      return '$' + (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }

    return (
      this.currencyPipe.transform(num, currencyCode, display, digitsInfo) || ''
    );
  }
}
