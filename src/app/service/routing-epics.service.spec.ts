import { TestBed, inject } from '@angular/core/testing';

import { RoutingEpicsService } from './routing-epics.service';

describe('RoutingEpicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutingEpicsService]
    });
  });

  it('should be created', inject([RoutingEpicsService], (service: RoutingEpicsService) => {
    expect(service).toBeTruthy();
  }));
});
