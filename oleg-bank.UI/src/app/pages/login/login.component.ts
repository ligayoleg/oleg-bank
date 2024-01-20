import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  homeComponent: any = HomeComponent;
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {

  }

  onLogin() {
    console.log('login');
  }

  onCancel() {
    this.homeComponent.isLoginEnabled = false;
  }
}
