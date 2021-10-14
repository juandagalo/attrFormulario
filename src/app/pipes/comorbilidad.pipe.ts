import { Pipe, PipeTransform } from '@angular/core';
import { ConceptosService } from 'src/app/services/conceptos.service';

@Pipe({
  name: 'comorbilidad',
  pure: false
})
export class ComorbilidadPipe implements PipeTransform {

  constructor(private conceptoService: ConceptosService) {}

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.conceptoService.conceptosComorbilidad.filter(obj => obj.conNumero == value)[0].conNombre;
  }

}
