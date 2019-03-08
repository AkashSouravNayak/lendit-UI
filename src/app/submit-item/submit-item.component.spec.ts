import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitItemComponent } from './submit-item.component';

describe('SubmitItemComponent', () => {
  let component: SubmitItemComponent;
  let fixture: ComponentFixture<SubmitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
