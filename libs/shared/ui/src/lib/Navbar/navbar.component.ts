import { Component, ViewEncapsulation } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    CommonModule,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  hidden = false;
  selectedValue = 'en-us';

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
