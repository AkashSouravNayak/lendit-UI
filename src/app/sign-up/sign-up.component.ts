import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GeneralService } from 'src/general.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private gs: GeneralService, private toastr: ToastrService) { 
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
  addSignup(value) {
    debugger;
    var obj = {
      "address1": value.address1,
      "address2": value.address2,
      "cityName": "Bengaluru",
      "email": value.email,
      "firstName": value.firstName,
      "lastName": value.lastname,
      "mobile": value.mobile,
      "password": value.password,
      "pinCode": "560099"
    }
    this.gs.register(obj).subscribe( res=> {
      this.toastr.success('successfully register, Please verify your email id')
    }, e=> {
      console.log(e['error']['success']['subErrors'][0]['message']);
      debugger;
      if(e['error']['success']['message'] == 'Validation error') {
        this.toastr.error(e['error']['success']['subErrors'][0]['message'], 'Major Error', {
          timeOut: 3000
        })
      }
    })
  }

}
