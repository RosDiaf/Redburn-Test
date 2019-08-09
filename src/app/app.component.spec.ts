import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component'
import { TableComponent } from './container/table/table.component'
import { RangeFilterComponent } from './container/range-filter/range-filter.component';
import { MultipleSelectionComponent } from './container/multiple-selection/multiple-selection.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContainerComponent,
        TableComponent,
        RangeFilterComponent,
        MultipleSelectionComponent
      ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule, FormsModule ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
