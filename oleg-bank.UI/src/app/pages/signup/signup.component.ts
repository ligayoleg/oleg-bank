import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  ngOnInit(): void {

  }
  title: string = '';

  onSignUp() {
    console.log('on sign up!');
  };

  onCancel() {
    console.log('on cancel!');
  }
}
