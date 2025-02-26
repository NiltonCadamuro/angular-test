import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent, SidebarComponent } from '@angular-project/ui';

@Component({
  imports: [NavbarComponent, SidebarComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard-app';
}
