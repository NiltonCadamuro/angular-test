import { Route } from '@angular/router';
import { NumbersComponent } from './nx-welcome.component';
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
    component: NumbersComponent,
  },
  {
    title: 'order',
    path: 'order',
    component: NumbersComponent,
  },
  {
    title: 'Products',
    path: 'products',
    component: NumbersComponent,
  },
  {
    title: 'Sales Report',
    path: 'sales-report',
    component: NumbersComponent,
  },
  {
    title: 'Messages',
    path: 'messages',
    component: NumbersComponent,
  },
  {
    title: 'Settings',
    path: 'settings',
    component: NumbersComponent,
  },
  {
    title: 'Sign Out',
    path: 'sign-out',
    component: NumbersComponent,
  },
];
