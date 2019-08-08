import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component'
import { TableComponent } from './container/table/table.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContainerComponent,
        TableComponent
      ],
      imports: [ HttpClientTestingModule ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
