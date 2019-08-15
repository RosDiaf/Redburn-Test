import { Component, OnInit, DoCheck, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit() {}

  ngDoCheck() {
    if(this.multipleItemSelected.length > 0) {
      let itemsArr = []
      for(let x in this.multipleItemSelected) {
        this.datasetTemp = this.dataset.filter(item => {
          return (item['Group'] === this.multipleItemSelected[x]) 
        });
        itemsArr = itemsArr.concat(this.datasetTemp)
        this.datasetTemp = itemsArr
      }
    } else {
      this.datasetTemp = this.dataset;
    }

    if(this.greaterThanValFilter > 0 && this.lessThanValFilter > 0) {
      this.datasetTemp = this.dataset.filter(val => {
        return val['Mkt Cap $(m)'] > this.greaterThanValFilter && val['Mkt Cap $(m)'] <= this.lessThanValFilter
      })
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
          return 'blue'
        } else {
          return 'red'
        }
      }
    }
  }
}
