import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, LoginComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isLoginEnabled: boolean = false;
  ngOnInit(): void {

  }

  onLogin() {
    if (!this.isLoginEnabled) {
      this.isLoginEnabled = true;
    }
  }


  onSignUp() {
    console.log("sign up");
  }
}
