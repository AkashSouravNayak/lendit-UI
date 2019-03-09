import { Component, OnInit, ElementRef, HostListener, Input} from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor(private router: Router) { }

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
    
  }

  goToHistory() {
    this.router.navigate(['/', 'history']);
  }
}
