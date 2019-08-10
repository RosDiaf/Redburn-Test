import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-selection',
  templateUrl: './multiple-selection.component.html',
  styleUrls: ['./multiple-selection.component.scss']
})
export class MultipleSelectionComponent implements OnInit {

  @Input() dataset: any;
  @Output() onMultipleSelection: EventEmitter<any> = new EventEmitter();
  groupNames: any;
  selectedItems: any;
  isToggleHeader: boolean;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.onMultipleSelection.emit(this.selectedItems);
  }

  resetSlection() {
    this.selectedItems.length = 0;
  }

  toggleHeader() {
    this.isToggleHeader = !this.isToggleHeader;
  }
}
