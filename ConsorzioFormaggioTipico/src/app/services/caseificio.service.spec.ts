import { TestBed } from '@angular/core/testing';

import { CaseificioService } from './caseificio.service';

describe('CaseificioService', () => {
  let service: CaseificioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseificioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
