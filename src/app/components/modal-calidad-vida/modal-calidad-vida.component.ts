import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConceptosService } from 'src/app/services/conceptos.service';
import { CalidadVida } from '../../models/calidadVida';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-calidad-vida',
  templateUrl: './modal-calidad-vida.component.html',
  styleUrls: []
})
export class ModalCalidadVidaComponent implements OnInit {

  calidadVidaModal: FormGroup;

  @Input() calidadVida:CalidadVida = {} as CalidadVida; 

  constructor(public     modal:NgbModal,
              private 	 formBuilder: FormBuilder,
              public  	 conceptosService: ConceptosService,
              private    datePipe: DatePipe) { }

  ngOnInit(): void {
    this.calidadVidaModal = this.formBuilder.group({
			attrFechaControlCalidad:[{ value: this.datePipe.transform(this.calidadVida.attrFechaControlCalidad,'dd/MM/YYYY'), disabled: true }],
			attrMovilidad:[{ value: this.calidadVida.attrMovilidad, disabled: true }],
			attrDolMalest:[{ value: this.calidadVida.attrDolMalest, disabled: true }],
			attrAnsiDepre:[{ value: this.calidadVida.attrAnsiDepre, disabled: true }],
			attrCuidPerso:[{ value: this.calidadVida.attrCuidPerso, disabled: true }],
			attrActiCotid:[{ value: this.calidadVida.attrActiCotid, disabled: true }]
		});

    
  }


  openModal(contenido){
    this.modal.open(contenido,{size:'xl',centered:true});
  }

}
