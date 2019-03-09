import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-submit-item',
  templateUrl: './submit-item.component.html',
  styleUrls: ['./submit-item.component.less']
})
export class SubmitItemComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('preview') preview: ElementRef;
  showImg: boolean = false;
  hidePlus: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }
  uploadImage () {
    debugger;
    this.showImg = true;
    let el: HTMLElement = this.fileInput.nativeElement as HTMLElement;
    el.click();
  }
  previewFile(e) {
    debugger;
    var reader;
    
    let imgFile: HTMLElement = this.preview.nativeElement as HTMLElement;
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      reader = new FileReader();

      reader.onload = function (e) {
        debugger;
        imgFile.setAttribute('src', e.target.result);;
      }

      reader.readAsDataURL(e.currentTarget.files[0]);
      this.hidePlus = false;
    }
  }
}
