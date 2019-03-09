import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  itemData: Object;
  categories: any;

  constructor(private gs: GeneralService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    // this.gs.getAdvantageData().subscribe(res => {
    //   this.itemData = res['items'];
    // });
    this.getAllItems();
    this.getCategories();
  }

  getCategories() {
    this.gs.getCategories().subscribe(res => {
      console.log(res);
      this.categories = res['data']['categories'];
    },
      e => {
        this.toastr.error('Oops, could not fetch available items!')
      })
  }

  getAllItems() {
    let obj = {
      "paginationDTO": {
        "pageNo": 0,
        "pageSize": 20,
        "sortOrder": "ascending"
      }
    }
    this.gs.getAllItems(obj).subscribe(res => {
      this.itemData = res['data']['data']
    })
  }

  grabNow(e) {
    console.log(e.currentTarget.id);
    this.router.navigate(['/item_details', e.currentTarget.id])
  }

}
