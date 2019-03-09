import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/general.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {
  listedItems: any;

  constructor(private gs: GeneralService, private toastr: ToastrService,  private router: Router) { }

  ngOnInit() {
    this.gs.getListedItem().subscribe( res=> {
      this.listedItems = res['data'];
    }, e=> {
      this.toastr.error('Oops, unable to fetch listed items!');
    })
  }

}
