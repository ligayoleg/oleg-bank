import { Component, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    middleInitial: new FormControl(''),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });
  constructor(
    private router: Router
  ) {

  }
  ngOnInit(): void {

  }
  title: string = '';

  onSignUp() {
    console.log(this.signUpForm);
    if (this.signUpForm.valid) {
      console.log('Valid!');
    } else {
      console.log('Invalid!');
    }

  };

  onCancel() {
    this.router.navigate(['/']);
  }
}
