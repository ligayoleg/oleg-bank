import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  onLogin(){
    console.log("login");
  }


  onSignUp(){
    console.log("sign up");
  }
}
