import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TableComponent } from './container/table/table.component'

// -- Service
import { DatasetService } from './api/dataset.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DatasetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
