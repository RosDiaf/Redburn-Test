import { Component, OnInit } from '@angular/core';
import { DatasetService } from '../api/dataset.service'
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  dataModel: any;
  dataset: any;
  datasetKeys = [];
  greaterThanValFilter: number;
  lessThanValFilter: number;
  filterRangeValues: any;
  multipleItemSelected = [];
  constructor(private datasetService: DatasetService) { }

  ngOnInit() {
    this.datasetService.getDataset()
    .subscribe(
      (res) => {
        this.dataset = res
        this.datasetKeys = Object.keys(this.dataset[0]) // Save only keys for table headers
      }
    )
  }

  onRangeSelect(valueRange) {
    this.greaterThanValFilter = valueRange.graterThan;
    this.lessThanValFilter = valueRange.lessThan;
  }

  onMultipleSelection(items) {
    this.multipleItemSelected = items
  }

  onResetFilter() {
    this.greaterThanValFilter = null;
    this.lessThanValFilter = null;
  }
}
