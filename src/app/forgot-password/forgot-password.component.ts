import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent implements OnInit {
  fpForm: FormGroup;
  email = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  constructor(private fb: FormBuilder) {
    this.fpForm = fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  ngOnInit() {
  }

}
