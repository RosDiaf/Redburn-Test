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
  isToggleHeader: boolean;
  groupSelected: any = [];

  constructor() { }

  ngOnInit() {
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
