import { Component, Input, signal } from '@angular/core';
import { MenuItemComponent } from './MenuItem/menuitem.component';
import { RouteService } from '../../../services/RouteService/routeService.service';

@Component({
  selector: 'lib-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [MenuItemComponent],
})
export class MenuComponent {
  currentRoute = signal('');
  @Input() items: {
    icon: string;
    label: string;
    link: string;
  }[] = [];

  constructor(public routeService: RouteService) {}
}
