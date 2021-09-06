import { Pipe, PipeTransform } from '@angular/core';
import { ConceptosService } from '../services/conceptos.service';

@Pipe({
  name: 'encuestaTerminada',
  pure: false
})
export class EncuestaTerminadaPipe implements PipeTransform {

  constructor(private conceptoService: ConceptosService) {}

  transform(value: unknown,  ...args: unknown[]): unknown {
    if (Object.values(value).indexOf(this.conceptoService.getNotValidId()) > -1) {
      return "No";
    }
    return "Si";
  }

}
