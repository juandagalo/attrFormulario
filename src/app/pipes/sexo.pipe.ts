import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == 1) {
      return "Hombre";
    }else if(value == 2){
      return "Mujer";
    }else{
      return value;
    }
  }

}
