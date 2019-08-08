import { Component, OnInit } from '@angular/core';
import { DatasetService } from '../api/dataset.service'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  dataset: any;
  constructor(private datasetService: DatasetService) { }

  ngOnInit() {
    this.datasetService.getDataset()
    .subscribe(
      (res) => {
        this.dataset = res
        console.log(this.dataset);
      }
    )
  }
}
