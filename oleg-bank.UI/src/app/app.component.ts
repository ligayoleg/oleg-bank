import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from './layouts/nav/nav.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'oleg-bank.UI';
}
