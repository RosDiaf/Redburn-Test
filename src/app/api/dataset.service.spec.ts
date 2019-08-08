import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { DatasetService } from './dataset.service';

describe('DatasetService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DatasetService = TestBed.get(DatasetService);
    expect(service).toBeTruthy();
  });
});
