import { TestBed } from '@angular/core/testing';

import { FilterResultsService } from './filter-results.service';

describe('FilterResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterResultsService = TestBed.get(FilterResultsService);
    expect(service).toBeTruthy();
  });
});
