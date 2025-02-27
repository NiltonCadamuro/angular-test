import { Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  currentRoute = signal('');

  getCurrentRoute() {
    if (typeof window === 'undefined') return '';
    return window.location.pathname;
  }

  constructor(private router: Router) {
    this.currentRoute.set(this.getCurrentRoute());

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute.set(event.url);
      });
  }
}
