import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/general.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @HostListener('document:click', ['$event']) clickout(event) {
    this.showUserAction = false;
  }
  showNotify: boolean = false;
  showUserAction: boolean = false;
  ifLogin: boolean = false;
  showHistory: boolean = false;
  state : any = true;
  ifLogout : boolean = false;

  constructor(private router: Router, private gs: GeneralService, private toastr: ToastrService, private cookieService: CookieService) {
    this.gs.navState$.subscribe( (state)=> this.state = state );
    this.gs.logoutState$.subscribe( (state) => this.ifLogout = state);
  }

  ngOnInit() {
  }

  openNotifications(e) {
    this.showNotify = true;
  }

  showUserActions(e: Event) {
    e.stopPropagation();
    this.showUserAction = true;
  }

  logout() {
    this.router.navigate(['/', 'login']);
    this.toastr.success('Logged out!');
    localStorage.set('aToken', '');
    localStorage.set('userID', '');
    // this.cookieService.deleteAll();

    // this.gs.logout().subscribe( res=> {
    //   debugger;

    // }, e=> {
    //   this.toastr.error('Error in logging out!')
    // })
  }

  goToHistory() {
    this.router.navigate(['/', 'history']);
  }
}
