import { TestBed } from '@angular/core/testing';

import { VeroexpressService } from './veroexpress.service';

describe('VeroexpressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeroexpressService = TestBed.get(VeroexpressService);
    expect(service).toBeTruthy();
  });
});
