import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  itemData: Object;

  constructor(private gs: GeneralService) { }

  ngOnInit() {
    this.gs.getAdvantageData().subscribe(res => {
      this.itemData = res['items'];
    });
  }

  grabNow(e) {
    console.log(e.currentTarget.id);
  }

}
