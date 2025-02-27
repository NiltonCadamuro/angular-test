import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-graphcard',
  templateUrl: './graphcard.component.html',
  styleUrl: './graphcard.component.scss',
})
export class GraphcardComponent {
  @Input() title = '';
  @Input() subTitle: string | undefined;
  @Input() width = '100%';
  @Input() paddingCard = '0 28px 28px';
  @Input() paddingHeader = '26px 28px 25px';
  @Input() hasExportBtn = false;
  @Input() exportBtnFunction: () => void = () => {
    console.log('Export button clicked');
  };
}
