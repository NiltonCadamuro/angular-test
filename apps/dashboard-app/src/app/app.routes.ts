import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    title: 'Dashboard',
    path: '',
    component: NxWelcomeComponent,
  },
  {
    title: 'Leaderboard',
    path: 'leaderboard',
    component: NxWelcomeComponent,
  },
  {
    title: 'order',
    path: 'order',
    component: NxWelcomeComponent,
  },
  {
    title: 'Products',
    path: 'products',
    component: NxWelcomeComponent,
  },
  {
    title: 'Sales Report',
    path: 'sales-report',
    component: NxWelcomeComponent,
  },
  {
    title: 'Messages',
    path: 'messages',
    component: NxWelcomeComponent,
  },
  {
    title: 'Settings',
    path: 'settings',
    component: NxWelcomeComponent,
  },
  {
    title: 'Sign Out',
    path: 'sign-out',
    component: NxWelcomeComponent,
  },
];
