import { TestBed } from '@angular/core/testing';

import { MostrarUsuarioService } from './mostrar-usuario.service';

describe('MostrarUsuarioService', () => {
  let service: MostrarUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
