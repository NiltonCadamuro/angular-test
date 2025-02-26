import { Component } from '@angular/core';
import { MenuComponent } from './Menu/menu.component';

@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [MenuComponent],
})
export class SidebarComponent {}
