import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// -- Components
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ContainerComponent } from './container/container.component';
import { MultipleSelectionComponent } from './container/multiple-selection/multiple-selection.component';
import { RangeFilterComponent } from './container/range-filter/range-filter.component';
import { TableComponent } from './container/table/table.component'

// -- Service
import { DatasetService } from './api/dataset.service';

// -- Pipe
import { KeysPipe } from './pipe/keys.pipe';

// -- Router
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TableComponent,
    RangeFilterComponent,
    MultipleSelectionComponent,
    KeysPipe,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatasetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
