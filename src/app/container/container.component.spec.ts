import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContainerComponent } from './container.component';
import { TableComponent } from './table/table.component'
import { RangeFilterComponent } from './range-filter/range-filter.component';
import { MultipleSelectionComponent } from './multiple-selection/multiple-selection.component';
import { DatasetService } from '../api/dataset.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { KeysPipe } from '../pipe/keys.pipe';


describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ContainerComponent,
        TableComponent,
        RangeFilterComponent,
        MultipleSelectionComponent,
        KeysPipe ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot([]) ],
      providers: [ DatasetService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
