import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dataset: any;
  @Input() datasetKeys = [];
  @Input() greaterThanValFilter: number;
  @Input() lessThanValFilter: number;
  @Input() multipleItemSelected = [];
  isTitleHeaderFullyVisible: boolean;
  constructor() { }

  ngOnInit() {}

  toggleTableHeaders() {
    this.isTitleHeaderFullyVisible = !this.isTitleHeaderFullyVisible;
  }
}
