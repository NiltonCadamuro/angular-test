import { Component, Input, signal, OnInit } from '@angular/core';
import { MenuItemComponent } from './MenuItem/menuitem.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'lib-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [MenuItemComponent],
})
export class MenuComponent implements OnInit {
  currentRoute = signal('');
  @Input() items: {
    icon: string;
    label: string;
    link: string;
  }[] = [];

  getCurrentRoute() {
    if (typeof window === 'undefined') return '';
    return window.location.pathname;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute.set(this.getCurrentRoute());

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute.set(event.url);
      });
  }
}
