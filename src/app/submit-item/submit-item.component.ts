import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GeneralService } from '../../general.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-submit-item',
  templateUrl: './submit-item.component.html',
  styleUrls: ['./submit-item.component.less']
})
export class SubmitItemComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('preview') preview: ElementRef;
  filesToUpload = [];
  showImg: boolean = false;
  hidePlus: boolean = true;
  showPricing: boolean = false;
  categories: any;
  selectedCategory: any;
  itemName: any;
  itemManufacturer: any;
  datePicker: any;
  itemPrice: any;
  itemLocation: any;
  biddingPermitted: boolean = false;
  minPrice: any;
  maxPrice: any;


  constructor(private gs: GeneralService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getCategories();
  }
  uploadImage() {
    this.showImg = true;
    let el: HTMLElement = this.fileInput.nativeElement as HTMLElement;
    el.click();
  }
  previewFile(e) {
    var reader;
    let imgFile: HTMLElement = this.preview.nativeElement as HTMLElement;
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      reader = new FileReader();

      reader.onload = function (e) {
        imgFile.setAttribute('src', e.target.result);;
      }

      reader.readAsDataURL(e.currentTarget.files[0]);
      this.filesToUpload = e.target.files;
      this.hidePlus = false;
    }
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
  bidPermission(e) {
    if (e.target.checked) {
      this.showPricing = true;
    } else {
      this.showPricing = false;
    }
    this.biddingPermitted = e.target.checked;
  }
  submitItem() {
    var fromDate = this.formatDate(this.datePicker[0]);
    var toDate = this.formatDate(this.datePicker[1]);
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    
    for(let i =0; i < files.length; i++){
        formData.append("file", files[i], files[i]['name']);
    }
    
    if (this.biddingPermitted) {
      var obj = {
        address: this.itemLocation,
        beedingType: this.biddingPermitted,
        categoryId: this.selectedCategory,
        flatPrice: this.itemPrice,
        itemName: this.itemName,
        lendEndDate: toDate,
        lendStartDate: fromDate,
        manufacturer: this.itemManufacturer,
        maxPrice: this.maxPrice,
        minPrice: this.minPrice
      }
      formData.append('submitData',JSON.stringify(obj));
      this.gs.submitItem(formData).subscribe( res=> {
        this.toastr.success('Item submitted successfully!');
        this.router.navigate(['','history']);
      }, e=> {
        this.toastr.error('Oops, error in submitting item!');
      })
    } else {
      var obj1 = {
        address: this.itemLocation,
        beedingType: this.biddingPermitted,
        categoryId: parseInt(this.selectedCategory),
        flatPrice: this.itemPrice,
        itemName: this.itemName,
        lendEndDate: toDate,
        lendStartDate: fromDate,
        manufacturer: this.itemManufacturer,
        maxPrice: '',
        minPrice: ''
      }
      formData.append('submitData',JSON.stringify(obj1));
      this.gs.submitItem(formData).subscribe( res=> {
        this.toastr.success('Item submitted successfully!');
        this.router.navigate(['','history']);
      }, e=> {
        this.toastr.error('Oops, error in submitting item!');
      })
    }
  }
  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
}
