import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  styleUrls: ['./range-filter.component.scss']
})
export class RangeFilterComponent implements OnInit {
  @Output() onRangeSelect: EventEmitter<any> = new EventEmitter();
  @Output() onResetFilter: EventEmitter<any> = new EventEmitter();
  rangeFilterForm: FormGroup;
  isToggleHeader: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildRangeFilterForm();
  }

  buildRangeFilterForm() {
    this.rangeFilterForm = this.formBuilder.group({
      graterThan: this.formBuilder.control(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
      lessThan: this.formBuilder.control(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
    });
  }

  resetFilter() {
    this.rangeFilterForm.reset();
    this.onResetFilter.emit();
  }

  onSubmit() {
    if (this.rangeFilterForm.valid) {
      this.onRangeSelect.emit(this.rangeFilterForm.value);
    }
  }

  toggleHeader() {
    this.isToggleHeader = !this.isToggleHeader;
  }
}
