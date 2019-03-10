import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/general.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  email = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  notValid = false;
  constructor( private cookieService: CookieService, private fb: FormBuilder, private gs: GeneralService, private toastr: ToastrService,  private router: Router) {
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
        emailId: value.email,
        password: value.password
    }
    this.gs.login(obj).subscribe(res=> {
      debugger;
      var now = new Date();
      var time = now.getTime();
      time += 3600 * 1000;
      now.setTime(time);
      now.toUTCString();
      // var a = now.toString();
      localStorage.setItem('aToken', res['X-TOKEN']);
      localStorage.setItem('userID', res['authenticatedUser']['userId']);
      this.cookieService.set( 'JSESSIONID', res['JSESSIONID'], now, '/','10.177.7.5');
      this.cookieService.set( 'XSRF-TOKEN', res['X-TOKEN']);
      this.router.navigate(['/','home']);
      this.gs.setNavBarState(false);
      this.toastr.success('Login Successfull!');
    }, e=> {
      this.toastr.error('Invalid Credentials!')
    })
  }

}
