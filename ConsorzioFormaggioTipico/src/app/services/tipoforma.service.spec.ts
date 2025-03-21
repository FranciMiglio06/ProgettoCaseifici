import { TestBed } from '@angular/core/testing';

import { TipoformaService } from './tipoforma.service';

describe('TipoformaService', () => {
  let service: TipoformaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoformaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
