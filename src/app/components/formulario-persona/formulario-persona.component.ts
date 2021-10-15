import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//Models
import { hisPaciente } from 'src/app/models/hisPaciente';
import { PacienteAttr } from 'src/app/models/pacienteAttr';
import { Concepto } from 'src/app/models/concepto';

//Services
import { ConceptosService } from 'src/app/services/conceptos.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: []
})
export class FormularioPersonaComponent implements OnChanges {

  	attrForm: FormGroup;

  	implanteCardiaco                            = false;
	tieneOtroSindromeClinico                    = false;
	tieneManifestacionesExtracardiacas          = false;
	tieneOtrasManifestacionesExtracardiacas     = false;
	tieneGrosorVentriculoIzquierdo              = false;
	tieneResonanciaMagnetica                    = false;
	tieneAtter                                  = false;
	tieneOtraInvervencionFarmacologica          = false;
	tieneHospitalizacionesFCardiaca             = false;

	@Input() flagExistePaciente: boolean		= false;
	
	@Input() hisPaciente: hisPaciente 			= {} as hisPaciente;
	@Input() conceptos: Concepto 				= {} as Concepto;
	@Input() pacienteEdad: number 				= null;
	@Input() pacienteAttr: PacienteAttr 		= {} as PacienteAttr;

	loaded: boolean								= false;

	constructor(private		formBuilder: FormBuilder,
				private		toastr:ToastrService,
				public		conceptosService: ConceptosService,
				public		pacientesService: PacientesService) { }
  

	ngOnChanges(changes: SimpleChanges): void {
		
		this.crearFormularios();
		this.onChanges();

		if (changes.pacienteAttr && changes.pacienteAttr.currentValue && this.flagExistePaciente) {

			this.ponerValoresPorOmision(this.pacienteAttr);

		}

	}

  	onChanges(): void {

		this.attrForm.get('AttrImplanteDispositivo').valueChanges.subscribe(val => {

			if (val != this.conceptosService.conceptosNo.conNumero) {
				this.mostrarDispositivosCardiacos(true);
			}else{
				this.mostrarDispositivosCardiacos(false);
			}
		});

		this.attrForm.get('AttrFormaSindClinico').valueChanges.subscribe(val => {

			if (val == this.conceptosService.conceptosOtroSindClinico.conNumero) {
				this.otroSindromeClinico(true);
			}else{
				this.otroSindromeClinico(false);
			}
		});

		this.attrForm.get('AttrManifestExtracardiaca').valueChanges.subscribe(val => {

			if (val != this.conceptosService.conceptosNo.conNumero) {
				this.mostrarManifestacionesExtracardiacas(true);
			}else{
				this.mostrarManifestacionesExtracardiacas(false);
			}
		});

		this.attrForm.get('AttrTipoManifestExtracardiaca').valueChanges.subscribe(val => {

			if (val == this.conceptosService.conceptosOtraManifesCardi.conNumero) {
				this.otrasManifestacionesExtracardiacas(true);
			}else{
				this.otrasManifestacionesExtracardiacas(false);
			}
		});

		this.attrForm.get('AttrGrosorVentri').valueChanges.subscribe(val => {

			if (val != this.conceptosService.conceptosNo.conNumero) {
				this.mostrarGrosorVentriculoIzquierdo(true);
			}else{
				this.mostrarGrosorVentriculoIzquierdo(false);
			}
		});

		this.attrForm.get('AttrAttrCm').valueChanges.subscribe(val => {

			if (val != this.conceptosService.conceptosNo.conNumero) {
				this.mostrarAttr(true);
			}else{
				this.mostrarAttr(false);
			}
		});

		this.attrForm.get('AttrInterFamaco').valueChanges.subscribe(val => {

			if (val == this.conceptosService.conceptosOtraInterFamaco.conNumero) {
				this.otraInvervencionFarmacologica(true);
			}else{
				this.otraInvervencionFarmacologica(false);
			}
		});

	}

  crearFormularios():void{

		this.attrForm = this.formBuilder.group({
		
			AttrEtnia: ['', Validators.required],
			AttrOcupacion: ['', Validators.required],
			AttrFechaPrimConsul: ['', Validators.required],
			AttrImplanteDispositivo: ['', Validators.required],
			AttrTipoImplanteDispositivo: [''],
			AttrFormaSindClinico: ['', Validators.required],
			AttrOtraFormaSindClinico: [''],
			AttrManifestExtracardiaca: ['', Validators.required],
			AttrTipoManifestExtracardiaca: [''],
			AttrOtroTipoManifestExtracardiaca: [''],
			AttrManifestElectro: ['', Validators.required],
			AttrGrosorVentri: ['', Validators.required],
			AttrFracEyecc: ['',Validators.max(1)],
			AttrDeformLong: ['',Validators.max(1)],
			AttrResoNucleGodolinio: ['', Validators.required],
			AttrTipoAnormGadolinio: [''],
			AttrGammagr: ['', Validators.required],
			AttrAmiloidosis: ['', Validators.required],
			AttrAttrCm: ['', Validators.required],
			AttrInterFamaco: ['', Validators.required],
			AttrOtroInterFamaco: [''],
			AttrDesenlace: [''],
			AttrFechaAttrCm: [''],
			AttrTipoAttrCm: [''],
			AttrFechaFallece: [''],
			AttrEdadFallece: [''],
		
		});
	}

  guadarPaciente(){

		const pacienteAttr: PacienteAttr = this.crearPacienteAttr();

		// console.log(pacienteAttr);
		

		// return true;

		if (!this.flagExistePaciente) {
			
			this.pacientesService.guardarPacienteAttr(pacienteAttr).subscribe(
				(data: any) => {
					this.toastr.success('Paciente agregado', 'El paciente fue agregado correctamente');
				},
				error => {
					this.toastr.error('Error', 'Hubo un error al crear al paciente')	
				});

		}else{
			
			this.pacientesService.actualizarPacienteAttr(pacienteAttr).subscribe(
				(data: any) => {
					this.toastr.success('Paciente actualizado', 'El paciente fue actualizado correctamente');
				},
				error => {
					this.toastr.error('Error', 'Hubo un error al actualizar al paciente');
				});
		}
		
	}

  crearPacienteAttr(): PacienteAttr{
		const pacienteAttr: PacienteAttr = {
			attrNumero: 						this.hisPaciente.pacNumero,
			attrEtnia: 							Number(this.attrForm.get('AttrEtnia').value),
			attrOcupacion: 						this.attrForm.get('AttrOcupacion').value,
			attrFechaPrimConsul:				new Date(this.attrForm.get('AttrFechaPrimConsul').value),
			attrImplanteDispositivo: 			Number(this.attrForm.get('AttrImplanteDispositivo').value),
			attrTipoImplanteDispositivo: 		this.attrForm.get('AttrTipoImplanteDispositivo').value ?
													Number(this.attrForm.get('AttrTipoImplanteDispositivo').value) : this.conceptosService.getNotValidId(),
			attrFormaSindClinico: 				Number(this.attrForm.get('AttrFormaSindClinico').value),
			attrOtraFormaSindClinico: 			this.attrForm.get('AttrOtraFormaSindClinico').value,
			attrManifestExtracardiaca: 			Number(this.attrForm.get('AttrManifestExtracardiaca').value),
			attrTipoManifestExtracardiaca: 		this.attrForm.get('AttrTipoManifestExtracardiaca').value ?
													Number(this.attrForm.get('AttrTipoManifestExtracardiaca').value) : this.conceptosService.getNotValidId(),
			attrOtroTipoManifestExtracardiaca: 	this.attrForm.get('AttrOtroTipoManifestExtracardiaca').value,
			attrManifestElectro: 				this.attrForm.get('AttrManifestElectro').value ?
													Number(this.attrForm.get('AttrManifestElectro').value) : this.conceptosService.getNotValidId(),
			attrGrosorVentri: 					Number(this.attrForm.get('AttrGrosorVentri').value),
			attrFracEyecc: 						Number(this.attrForm.get('AttrFracEyecc').value),
			attrDeformLong: 					Number(this.attrForm.get('AttrDeformLong').value),
			attrResoNucleGodolinio: 			Number(this.attrForm.get('AttrResoNucleGodolinio').value),
			attrTipoAnormGadolinio: 			this.attrForm.get('AttrTipoAnormGadolinio').value ?
													Number(this.attrForm.get('AttrTipoAnormGadolinio').value) : this.conceptosService.getNotValidId(),
			attrGammagr: 						Number(this.attrForm.get('AttrGammagr').value),
			attrAmiloidosis: 					Number(this.attrForm.get('AttrAmiloidosis').value),
			attrAttrCm:  						Number(this.attrForm.get('AttrAttrCm').value),
			attrFechaAttrCm: 					this.attrForm.get('AttrFechaAttrCm').value ?
													new Date(this.attrForm.get('AttrFechaAttrCm').value) : new Date("01/01/1999"),
			attrTipoAttrCm: 					this.attrForm.get('AttrTipoAttrCm').value ?
													Number(this.attrForm.get('AttrTipoAttrCm').value) : this.conceptosService.getNotValidId(),
			attrInterFamaco: 					Number(this.attrForm.get('AttrInterFamaco').value),
			attrOtroInterFamaco: 				this.attrForm.get('AttrOtroInterFamaco').value,
			attrDesenlace: 						null ? null : 4559,
			attrFechaFallece: 					null ? null : new Date("01/01/1999"),
			attrEdadFallece: 					0
		};

		return pacienteAttr;
	}


  ponerValoresPorOmision(paciente): void{

		let pacienteAttr  = {
			AttrEtnia: 							paciente.attrEtnia,
			AttrOcupacion: 						paciente.attrOcupacion,
			AttrFechaPrimConsul:				paciente.attrFechaPrimConsul,
			AttrImplanteDispositivo: 			paciente.attrImplanteDispositivo,
			AttrTipoImplanteDispositivo: 		paciente.attrTipoImplanteDispositivo,
			AttrFormaSindClinico: 				paciente.attrFormaSindClinico,
			AttrOtraFormaSindClinico: 			paciente.attrOtraFormaSindClinico,
			AttrManifestExtracardiaca: 			paciente.attrManifestExtracardiaca,
			AttrTipoManifestExtracardiaca: 		paciente.attrTipoManifestExtracardiaca,
			AttrOtroTipoManifestExtracardiaca: 	paciente.attrOtroTipoManifestExtracardiaca,
			AttrManifestElectro: 				paciente.attrManifestElectro,
			AttrGrosorVentri: 					paciente.attrGrosorVentri,
			AttrFracEyecc: 						paciente.attrFracEyecc,
			AttrDeformLong: 					paciente.attrDeformLong,
			AttrResoNucleGodolinio: 			paciente.attrResoNucleGodolinio,
			AttrTipoAnormGadolinio: 			paciente.attrTipoAnormGadolinio,
			AttrGammagr: 						paciente.attrGammagr,
			AttrAmiloidosis: 					paciente.attrAmiloidosis,
			AttrAttrCm:  						paciente.attrAttrCm,
			AttrFechaAttrCm: 					paciente.attrFechaAttrCm,
			AttrTipoAttrCm: 					paciente.attrTipoAttrCm,
			AttrInterFamaco: 					paciente.attrInterFamaco,
			AttrOtroInterFamaco: 				paciente.attrOtroInterFamaco,
			AttrDesenlace: 						paciente.attrDesenlace,
			AttrFechaFallece: 					paciente.attrFechaFallece ? paciente.attrFechaFallece : "",
			AttrEdadFallece: 					paciente.attrEdadFallece
		};

		this.attrForm.setValue(pacienteAttr);
		
	}


  mostrarDispositivosCardiacos(implanteCardiaco: boolean): void{

		if (!implanteCardiaco) {

			this.attrForm.controls['AttrTipoImplanteDispositivo'].setValue(null);
			
		}
		this.implanteCardiaco = implanteCardiaco;
		
	}

	otroSindromeClinico(tieneOtroSindromeClinico: boolean): void{
	
		this.tieneOtroSindromeClinico = tieneOtroSindromeClinico;
	
	}


	mostrarManifestacionesExtracardiacas(tieneManifestacionesExtracardiacas: boolean): void{
	
		this.tieneManifestacionesExtracardiacas = tieneManifestacionesExtracardiacas;
		
		if (!tieneManifestacionesExtracardiacas) { this.tieneOtrasManifestacionesExtracardiacas = tieneManifestacionesExtracardiacas; }
	
	}



	otrasManifestacionesExtracardiacas(tieneOtrasManifestacionesExtracardiacas: boolean): void{
	
		this.tieneOtrasManifestacionesExtracardiacas = tieneOtrasManifestacionesExtracardiacas;
	
	}



	mostrarGrosorVentriculoIzquierdo(tieneGrosorVentriculoIzquierdo: boolean): void{

		this.tieneGrosorVentriculoIzquierdo = tieneGrosorVentriculoIzquierdo;		

	}


	mostrarResonanciaMagnetica(tieneResonanciaMagnetica: boolean): void{
		this.tieneResonanciaMagnetica = tieneResonanciaMagnetica;
	}
	

	mostrarAttr(tieneAtter: boolean): void{
		this.tieneAtter = tieneAtter;
	}


	otraInvervencionFarmacologica(tieneOtraInvervencionFarmacologica: boolean): void{
		this.tieneOtraInvervencionFarmacologica = tieneOtraInvervencionFarmacologica;
	}


	mostrarHospitalizacionesFCardiaca(tieneHospitalizacionesFCardiaca: boolean): void{
		this.tieneHospitalizacionesFCardiaca = tieneHospitalizacionesFCardiaca;
	}

}
