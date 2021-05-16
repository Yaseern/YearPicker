import { Component, Input, forwardRef, HostBinding, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngy-year-picker',
  template: `
  <select class="form-control year-select" name="{{fieldName}}" [id]="id" (change)="change(select.value)" #select
  [disabled]="isDisabled" required="{{isRequired}}">
    <option [value]=""></option>
    <option *ngFor="let year of yearList" [value]="year" [selected]="_value===year">{{year}}</option>
  </select>
  `,
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgYasYearPickerComponent),
      multi: true,
    },
  ],
})
export class NgYasYearPickerComponent implements ControlValueAccessor, OnInit {

  @Input() isRequired: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() fieldName: string = "";
  @Input() isQuarterYear: boolean;

  @HostBinding("attr.id")
  externalId = "";

  @Input()
  set id(value: string) {
    this._ID = value;
    this.externalId = null;
  }

  get id() {
    return this._ID;
  }

  private _ID = "";

  private _value
  onChange: any = () => { };
  onTouched: any = () => { };

  yearList: any[] = [];
  constructor() { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    if (this.isQuarterYear) {
      this.configureFinancialQuarterSelection();
    } else {
      this.configureYearSelection();
    }
  }

  configureYearSelection() {
    this.yearList = [];
    let todayYear = new Date().getFullYear();
    let maxYear = 10;
    let minYear = 10;

    const selectedValue = this._value ? Number(this._value) : todayYear;
    if (selectedValue > todayYear) {
      maxYear = (selectedValue - todayYear) + 10;
    } else if (selectedValue < todayYear) {
      minYear = (todayYear - selectedValue) + 10;
    }

    for (let i = todayYear - minYear; i <= todayYear + maxYear; i++) {
      this.yearList.push(i);
    }
  }

  configureFinancialQuarterSelection() {
    this.yearList = ['Q1', 'Q2', 'Q3', 'Q4'];
  }

  change(val) {
    this.onChange(val);
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  writeValue(value): void {
    this._value = value;
    if (!this.isQuarterYear && this._value) {
      this.configureYearSelection();
      this.onChange(value);
    }
  }

  registerOnTouched(fn): void {
    this.onTouched = fn;
  }
}