import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgYasYearPickerComponent } from './ng-yas-year-picker.component';

describe('NgYasYearPickerComponent', () => {
  let component: NgYasYearPickerComponent;
  let fixture: ComponentFixture<NgYasYearPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgYasYearPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgYasYearPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
