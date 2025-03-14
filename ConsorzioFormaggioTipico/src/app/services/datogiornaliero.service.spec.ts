import { TestBed } from '@angular/core/testing';

import { DatoGiornalieroService } from './datogiornaliero.service';

describe('DatogiornalieroService', () => {
  let service: DatoGiornalieroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoGiornalieroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
