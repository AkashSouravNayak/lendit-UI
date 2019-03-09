import { Component, OnInit, ElementRef, HostListener, Input} from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/general.service';
import { ToastrService } from 'ngx-toastr';

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
  showUserAction: boolean = true;
  ifLogin: boolean = false;
  
  constructor(private router: Router, private gs: GeneralService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  openNotifications(e) {
    this.showNotify = true;
  }

  showUserActions(e : Event) {
    e.stopPropagation();
    this.showUserAction = true;
  }

  logout() {
    this.gs.logout().subscribe( res=> {
      this.toastr.success('Logged out!');
      localStorage.set('aToken', '');
      localStorage.set('userID', '');
      this.router.navigate(['','home']);
    }, e=> {
      this.toastr.error('Error in logging out!')
    })
  }

  goToHistory() {
    this.router.navigate(['/', 'history']);
  }
}
