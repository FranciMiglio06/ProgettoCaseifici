import { TestBed } from '@angular/core/testing';

import { TipostagionaturaService } from './tipostagionatura.service';

describe('TipostagionaturaService', () => {
  let service: TipostagionaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipostagionaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
