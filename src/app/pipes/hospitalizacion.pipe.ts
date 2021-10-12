import { Pipe, PipeTransform } from '@angular/core';
import { ConceptosService } from 'src/app/services/conceptos.service';

@Pipe({
  name: 'hospitalizacion',
  pure: false
})
export class HospitalizacionPipe implements PipeTransform {

  constructor(private conceptoService: ConceptosService) {}

  transform(value: any[], ...args: unknown[]): unknown {

    return this.conceptoService.diagnosticos.filter(obj => obj.diaNumero == value)[0].diaNombre;
  }

}
