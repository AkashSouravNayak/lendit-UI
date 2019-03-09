import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  itemData: Object;

  constructor(private gs: GeneralService, private router: Router) { }

  ngOnInit() {
    this.gs.getAdvantageData().subscribe(res => {
      this.itemData = res['items'];
    });
  }

  grabNow(e) {
    console.log(e.currentTarget.id);
    this.router.navigate(['/item_details', e.currentTarget.id])
  }

}
