import { TestBed } from '@angular/core/testing';

import { GetStudentListService } from './get-student-list.service';

describe('GetStudentListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStudentListService = TestBed.get(GetStudentListService);
    expect(service).toBeTruthy();
  });
});
