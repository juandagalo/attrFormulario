import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPorcentaje]'
})
export class PorcentajeDirective {

  constructor(private el:ElementRef) { }

  @HostListener('focus') focus(){
    
    var str = this.el.nativeElement.value;
    this.el.nativeElement.value = str.substring(0, str.length - 1);

  }

  @HostListener('focusout') focusout(){
    var str = this.el.nativeElement.value;
    this.el.nativeElement.value = str + "%";
  }

}
