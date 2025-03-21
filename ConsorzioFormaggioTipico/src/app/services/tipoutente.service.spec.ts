import { TestBed } from '@angular/core/testing';

import { TipoutenteService } from './tipoutente.service';

describe('TipoutenteService', () => {
  let service: TipoutenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoutenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
