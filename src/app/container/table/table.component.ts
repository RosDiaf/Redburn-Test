import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { Router } from '@angular/router';
import { multiselectionFilter } from '../../shared/multiSelectionFilter'
import { rangeValuesFilter } from '../../shared/rangeValuesFilter'
import { constants } from '../../api/constants'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, DoCheck {

  @Input() dataset: any;
  @Input() datasetKeys = [];
  @Input() greaterThanValFilter: number;
  @Input() lessThanValFilter: number;
  @Input() multipleItemSelected = [];
  isTitleHeaderFullyVisible: boolean;
  isFixTableHeight: boolean;
  datasetTemp: any;
  constructor(private router: Router) { }

  ngOnInit() {}

  ngDoCheck() {
    if(this.multipleItemSelected.length > 0) {
      this.datasetTemp =
        multiselectionFilter(
          'Group',
          this.multipleItemSelected,
          this.dataset)  
    } else {
      this.datasetTemp = this.dataset;
    }
    if(this.greaterThanValFilter > 0 && this.lessThanValFilter > 0) {
      this.datasetTemp = 
        rangeValuesFilter(
          'Mkt Cap $(m)',
          this.greaterThanValFilter,
          this.lessThanValFilter,
          this.dataset)
    }
  }

  toggleTableHeaders() {
    this.isTitleHeaderFullyVisible = !this.isTitleHeaderFullyVisible;
  }

  toggleFixTableHeight() {
    this.isFixTableHeight = !this.isFixTableHeight;
  }

  colorType(key, value, items) {
    for(let i of items) {
      if(key === i) {
        if (value > 50) {
          return constants.COLORS.color1
        } else {
          return constants.COLORS.color2
        }
      }
    }
  }

  navigateToChart(dataset) {
    this.router.navigate(['/chart']);
  }
}
