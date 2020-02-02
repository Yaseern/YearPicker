import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'yas-year',
  templateUrl: './year.component.html',
  styles: [`
   .year-select {
        width : 8rem;
    }
  `]
})
export class YearComponent implements OnInit, OnChanges {

  @Input() isRequired: boolean = false;
  @Input() fieldName: string = "";
  @Input() isQuarterYear: boolean = false;

  @Input() yearModel: number;
  @Output() yearModelChange: EventEmitter<number> = new EventEmitter<number>();

  yearList: any[] = [];
  model: number;
  constructor() { }

  ngOnInit() {
    if (this.isQuarterYear) {
      this.configureFinancialQuarterSelection();
    } else {
      this.configureYearSelection();
    }
  }

  ngOnChanges() {
    if (this.yearModel) {
      this.model = this.yearModel;
    }
  }

  configureYearSelection() {
    this.yearList = [];
    let todayYear = new Date().getFullYear();
    let maxYear = 10;
    let minYear = 10;

    if (this.model > todayYear) {
      maxYear = (this.model - todayYear) + 10;
    } else if (this.model < todayYear) {
      minYear = (todayYear - this.model) + 10;
    }

    for (let i = todayYear - minYear; i <= todayYear + maxYear; i++) {
      this.yearList.push(i);
    }
  }

  configureFinancialQuarterSelection() {
    this.yearList = ['Q1', 'Q2', 'Q3', 'Q4'];
  }

  onChangeSelection() {
    this.yearModelChange.emit(this.model);

    if (!this.isQuarterYear) {
      this.configureYearSelection();
    }
  }

}
