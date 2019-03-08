import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.signupForm = fb.group({
      firstName: [
        null,
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      lastname: [
        null,
        Validators.compose([Validators.required, Validators.minLength(1)])
      ],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      mobile: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      password: [null, Validators.required],
      retypePassword: [null, Validators.required],
      address1: [null,  Validators.compose([Validators.required, Validators.minLength(3)])],
      address2: [null,  Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  ngOnInit() {
  }

  onChanges() {
    this.signupForm.valueChanges.subscribe(val => {
      // if (this.signupForm.valid === false) {
      //   this.captchaChecked = false;
      // }
    });
  }
  addSignup(value) {}

}
