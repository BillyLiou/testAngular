import { TestBed } from '@angular/core/testing';

import { CommonMethodService } from './common-method.service';

describe('CommonMethodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonMethodService = TestBed.get(CommonMethodService);
    expect(service).toBeTruthy();
  });
});
