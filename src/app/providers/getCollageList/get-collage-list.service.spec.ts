import { TestBed } from '@angular/core/testing';

import { GetCollageListService } from './get-collage-list.service';

describe('GetCollageListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCollageListService = TestBed.get(GetCollageListService);
    expect(service).toBeTruthy();
  });
});
