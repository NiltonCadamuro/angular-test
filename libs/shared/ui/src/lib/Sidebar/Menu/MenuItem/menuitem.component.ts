import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActiveIcon } from '../../../../pipes/ActiveIcon/activeicon.pipe';

@Component({
  selector: 'lib-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss'],
  imports: [RouterModule, ActiveIcon],
})
export class MenuItemComponent {
  @Input() icon = '';
  @Input() label = '';
  @Input() link = '';
  @Input() isActive = false;
}
