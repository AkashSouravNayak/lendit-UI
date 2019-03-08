import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  email = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  notValid = false;
  constructor(private fb: FormBuilder) {
    this.signinForm = fb.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      password: [null, Validators.required]
    });
   }

  ngOnInit() {
  }
  addSignin(value) {
    const obj = {
      password: value.password,
      username: value.email
    };
  }

}
