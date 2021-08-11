import { TestBed } from '@angular/core/testing';

import { FormularioMlfhService } from './formulario-mlfh.service';

describe('FormularioMlfhService', () => {
  let service: FormularioMlfhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioMlfhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
