import { TestBed } from '@angular/core/testing';

import { KinnserService } from './kinnser.service';

describe('KinnserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KinnserService = TestBed.get(KinnserService);
    expect(service).toBeTruthy();
  });
});
