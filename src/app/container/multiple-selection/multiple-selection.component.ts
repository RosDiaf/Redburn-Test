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
  // selectedItems: any;
  isToggleHeader: boolean;
  groupSelected: any = [];

  constructor() { }

  ngOnInit() {
  }

  // onSubmit() {
  //   this.onMultipleSelection.emit(this.selectedItems);
  // }

  resetSlection(event) {
    console.log(event)
    // this.selectedItems.length = 0;
    this.groupSelected.length = 0;
    this.onMultipleSelection.emit(this.groupSelected);
  }

  toggleHeader() {
    this.isToggleHeader = !this.isToggleHeader;
  }

  onChangeCategory(event, item: any) {
    if(event.target.checked && this.groupSelected.indexOf(item) === -1) {
      this.groupSelected.push(item)
    } else if(!event.target.checked) {
      this.groupSelected.pop(item)
    }
    this.onMultipleSelection.emit(this.groupSelected);
  }
}
