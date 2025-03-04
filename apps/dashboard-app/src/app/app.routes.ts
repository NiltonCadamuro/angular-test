import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashboardComponent } from './components/Dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    title: 'Dashboard',
    path: '',
    component: DashboardComponent,
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
