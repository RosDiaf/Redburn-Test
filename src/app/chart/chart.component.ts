import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DatasetService } from '../api/dataset.service'
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  dataset: any;
  company: string;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[] = [];

  constructor(private router: Router, private datasetService: DatasetService) { }

  ngOnInit() {
    this.datasetService.getDataset()
    .subscribe(
      (res) => {
        this.dataset = res
        console.log(this.dataset)
      }
    )
  }

  navigateToTable() {
    this.router.navigate(['']);
  }

  setChartType(type, event) {
    this.setTabNavStatus(event);
    this.barChartType = type;
  }

  setTabNavStatus(e) {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
    e.target.className = "nav-link active";
  }

  onChangeOptionItem() {
    // Filter object with company name provided from dropdown
    let company = this.company;
    let companyData =  this.dataset.filter(function(data) {
      return data.Company == company;
    });

    // Set chart labels
    this.barChartLabels = [
      "IDEAS Score (/100)",
      "Growth Score (/100)",
      "Ests Momentum - EPS",
      "Ests Mom Change (3m) - EPS",
      "Quality Score (/100)"
    ];

    // Display companie's data object filtered
    this.barChartData.push({ 
      data: [
        companyData[0]["IDEAS Score (/100)"],
        companyData[0]["Growth Score (/100)"],
        companyData[0]["Ests Momentum - EPS"],
        companyData[0]["Ests Mom Change (3m) - EPS"],
        companyData[0]["Quality Score (/100)"],
      ], label: this.company })
  }

  public chartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    // { // dark grey
    //   backgroundColor: 'rgba(77,83,96,0.2)',
    //   borderColor: 'rgba(77,83,96,1)',
    //   pointBackgroundColor: 'rgba(77,83,96,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(77,83,96,1)'
    // },
    // { // grey
    //   backgroundColor: 'rgba(148,159,177,0.2)',
    //   borderColor: 'rgba(148,159,177,1)',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }
  ];
}
