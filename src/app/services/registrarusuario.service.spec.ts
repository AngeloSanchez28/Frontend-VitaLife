import { TestBed } from '@angular/core/testing';

import { RegistrarusuarioService } from './registrarusuario.service';

describe('RegistrarusuarioService', () => {
  let service: RegistrarusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
