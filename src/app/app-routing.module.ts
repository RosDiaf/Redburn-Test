import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {
      path: '',
      component: ContainerComponent,
  },
  {
      path: 'chart',
      component: ChartComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
