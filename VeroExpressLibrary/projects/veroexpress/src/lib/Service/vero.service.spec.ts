import { TestBed } from '@angular/core/testing';

import { VeroService } from './vero.service';

describe('VeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeroService = TestBed.get(VeroService);
    expect(service).toBeTruthy();
  });
});
