import { TestBed } from '@angular/core/testing';

import { NgYasYearPickerService } from './ng-yas-year-picker.service';

describe('NgYasYearPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgYasYearPickerService = TestBed.get(NgYasYearPickerService);
    expect(service).toBeTruthy();
  });
});
