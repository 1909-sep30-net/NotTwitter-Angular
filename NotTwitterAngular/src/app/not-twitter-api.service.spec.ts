import { TestBed } from '@angular/core/testing';

import { NotTwitterAPIService } from './not-twitter-api.service';

describe('NotTwitterAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotTwitterAPIService = TestBed.get(NotTwitterAPIService);
    expect(service).toBeTruthy();
  });
});
