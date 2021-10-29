import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComorbilidadesComponent } from '../comorbilidades/comorbilidades.component';

@Component({
  selector: 'app-modal-comorbilidad-confirmacion',
  templateUrl: './modal-comorbilidad-confirmacion.component.html',
  styleUrls: [],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComorbilidadConfirmacionComponent implements OnInit {

  @Input() formularioCorrecto:boolean = false; 

  constructor(	config: NgbModalConfig, 
      			private modalService: NgbModal,
				private comorbilidad: ComorbilidadesComponent) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

	ngOnInit(): void {
	}
	
	open(contenido) {
		this.modalService.open(contenido,{size:'m',centered:true});
	}

	close(result: any): void{
		this.comorbilidad.guardarComorbilidad();
		this.modalService.dismissAll();
	}

}
