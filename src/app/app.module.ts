import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TableComponent } from './container/table/table.component'
import { RangeFilterComponent } from './container/range-filter/range-filter.component';
import { MultipleSelectionComponent } from './container/multiple-selection/multiple-selection.component';

// -- Service
import { DatasetService } from './api/dataset.service';

// -- Pipe
import { KeysPipe } from './pipe/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TableComponent,
    RangeFilterComponent,
    MultipleSelectionComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatasetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
