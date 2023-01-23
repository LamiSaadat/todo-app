import { TestBed } from '@angular/core/testing';

import { UiServicesService } from './ui-services.service';

describe('UiServicesService', () => {
  let service: UiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
