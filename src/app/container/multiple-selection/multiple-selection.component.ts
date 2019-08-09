import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-selection',
  templateUrl: './multiple-selection.component.html',
  styleUrls: ['./multiple-selection.component.scss']
})
export class MultipleSelectionComponent implements OnInit {

  @Input() dataset: any;

  constructor() { }

  ngOnInit() {
  }

}
