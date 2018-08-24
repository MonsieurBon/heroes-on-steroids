import { TestBed, inject } from '@angular/core/testing';

import { HttpEpicsService } from './http-epics.service';

describe('HttpEpicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpEpicsService]
    });
  });

  it('should be created', inject([HttpEpicsService], (service: HttpEpicsService) => {
    expect(service).toBeTruthy();
  }));
});
