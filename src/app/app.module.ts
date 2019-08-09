import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TableComponent } from './container/table/table.component'

// -- Service
import { DatasetService } from './api/dataset.service';

// -- Pipes
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TableComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DatasetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
