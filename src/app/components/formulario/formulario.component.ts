import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioMlfhService } from '../../services/formulario-mlfh.service';
import { hisPaciente } from 'src/app/models/hisPaciente';
import { Concepto } from 'src/app/models/concepto';
import { ConceptosService } from 'src/app/services/conceptos.service';
import { PacienteAttr } from 'src/app/models/pacienteAttr';
import { PacientesService } from '../../services/pacientes.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: []
})
export class FormularioComponent implements OnInit {
	loading:boolean										= true;
	attrForm: FormGroup;
	hisPaciente:hisPaciente;
	conceptos:Concepto;
	pacienteEdad:number;
	flagExiste:boolean;
	pacienteAttr:PacienteAttr							= {} as PacienteAttr;
	implanteCardiaco:boolean                            = false;
	tieneOtroSindromeClinico:boolean                    = false;
	tieneManifestacionesExtracardiacas:boolean          = false;
	tieneOtrasManifestacionesExtracardiacas:boolean     = false;
	tieneGrosorVentriculoIzquierdo:boolean              = false;
	tieneResonanciaMagnetica:boolean                    = false;
	tieneAtter:boolean                                  = false;
	tieneOtraInvervencionFarmacologica:boolean          = false;
	tieneHospitalizacionesFCardiaca:boolean             = false;
	formularioMlfh:any                                  = {};
  

  constructor(	private  	forumlarioMLFHService: 	FormularioMlfhService,
              	private  	routerAtive: 			ActivatedRoute,
              	private  	router:					Router,
				private 	formBuilder: 			FormBuilder,
              	public  	conceptosService : 		ConceptosService,
				public 		pacientesService :		PacientesService) {
	
		//Se obtiene la información de la ruta
		this.hisPaciente = this.router.getCurrentNavigation().extras.state.paciente as hisPaciente;
		this.conceptos = this.router.getCurrentNavigation().extras.state.concepto as Concepto;

		//Se calcula la edad del paciente
		this.pacienteEdad = this.ageFromDateOfBirthday(this.hisPaciente.pacFechaNac);
		
		//Se inicializan los conceptos desde la base de datos
		this.conceptosService.getDbConceptos();


		this.pacientesService.obtenerPacienteAttr(this.hisPaciente.pacNumero).subscribe(
			data => {

				this.pacienteAttr  = data as PacienteAttr;
				this.flagExiste = true;
				this.ponerValoresPorOmision(this.pacienteAttr);
				this.loading = false;
				
			},
			(error) => {    

				this.pacienteAttr  = {} as PacienteAttr;
				this.flagExiste = false;

			}	
		);



		// this.pacienteAttr = this.pacientesService
		
      	this.routerAtive.params.subscribe(params =>{
        	this.getFormulario();
      	});
		this.attrForm = this.formBuilder.group({

			AttrEtnia: ['',Validators.required],
			AttrOcupacion: ['',Validators.required],
			AttrFechaPrimConsul: ['',Validators.required],
			AttrComorbilidad: ['',Validators.required],
			AttrImplanteDispositivo: ['',Validators.required],
			AttrTipoImplanteDispositivo: [''],
			AttrFormaSindClinico: ['',Validators.required],
			AttrOtraFormaSindClinico: [''],
			AttrManifestExtracardiaca: ['',Validators.required],
			AttrTipoManifestExtracardiaca: [''],
			AttrOtroTipoManifestExtracardiaca: [''],
			AttrManifestElectro: ['',Validators.required],
			AttrNTproBN: ['',Validators.required],
			AttrTroponinT: ['',Validators.required],
			AttrGrosorVentri: ['',Validators.required],
			AttrFracEyecc: [''],
			AttrDeformLong: [''],
			AttrResoNucleGodolinio: ['',Validators.required],
			AttrTipoAnormGadolinio: [''],
			AttrGammagr: ['',Validators.required],
			AttrAmiloidosis: ['',Validators.required],
			AttrAttrCm: ['',Validators.required],
			AttrInterFamaco: ['',Validators.required],
			AttrOtroInterFamaco: [''],
		    AttrDesenlace: [''],
			AttrFechaAttrCm: [''],
			AttrTipoAttrCm: [''],
			AttrFechaFallece: [''],
			AttrEdadFallece: [''],

		});

  }


	getFormulario(): void{
		this.formularioMlfh = this.forumlarioMLFHService.getforumlariomlfh();
	}

	guadarPaciente(){

		this.loading = true;
		const pacienteAttr: PacienteAttr = this.crearPacienteAttr();

		if (!this.flagExiste) {
			console.log("Entre a guardar");
			
			this.pacientesService.guardarPacienteAttr(pacienteAttr).subscribe((data:any) =>{

				this.loading = false;
				
			});

		}else{
			console.log("Entre a actualiazr");
			
			this.pacientesService.actualizarPacienteAttr(pacienteAttr).subscribe((data:any) =>{

				this.loading = false;
				
			});
		}
		
	}

	ngOnInit(): void {
	}

	
	crearPacienteAttr(): PacienteAttr{
		const pacienteAttr: PacienteAttr = {
			attrNumero: 						this.hisPaciente.pacNumero,
			attrEtnia: 							Number(this.attrForm.get('AttrEtnia').value),
			attrOcupacion: 						this.attrForm.get('AttrOcupacion').value,
			attrFechaPrimConsul:				new Date(this.attrForm.get('AttrFechaPrimConsul').value),
			attrComorbilidad: 					Number(this.attrForm.get('AttrComorbilidad').value),
			attrImplanteDispositivo: 			Number(this.attrForm.get('AttrImplanteDispositivo').value),
			attrTipoImplanteDispositivo: 		this.attrForm.get('AttrTipoImplanteDispositivo').value ? 
													Number(this.attrForm.get('AttrTipoImplanteDispositivo').value) : this.conceptosService.conceptosAttr[0].conNumero,
			attrFormaSindClinico: 				Number(this.attrForm.get('AttrFormaSindClinico').value),
			attrOtraFormaSindClinico: 			this.attrForm.get('AttrOtraFormaSindClinico').value,
			attrManifestExtracardiaca: 			Number(this.attrForm.get('AttrManifestExtracardiaca').value),
			attrTipoManifestExtracardiaca: 		this.attrForm.get('AttrTipoManifestExtracardiaca').value ? 
													Number(this.attrForm.get('AttrTipoManifestExtracardiaca').value) : this.conceptosService.conceptosAttr[0].conNumero,
			attrOtroTipoManifestExtracardiaca: 	this.attrForm.get('AttrOtroTipoManifestExtracardiaca').value,
			attrManifestElectro: 				this.attrForm.get('AttrManifestElectro').value ? 
													Number(this.attrForm.get('AttrManifestElectro').value) : this.conceptosService.conceptosAttr[0].conNumero, 
			attrNTproBN: 						this.attrForm.get('AttrNTproBN').value,
			attrTroponinT: 						this.attrForm.get('AttrTroponinT').value,
			attrGrosorVentri: 					Number(this.attrForm.get('AttrGrosorVentri').value),
			attrFracEyecc: 						Number(this.attrForm.get('AttrFracEyecc').value),
			attrDeformLong: 					Number(this.attrForm.get('AttrDeformLong').value),
			attrResoNucleGodolinio: 			Number(this.attrForm.get('AttrResoNucleGodolinio').value),
			attrTipoAnormGadolinio: 			this.attrForm.get('AttrTipoAnormGadolinio').value ? 
													Number(this.attrForm.get('AttrTipoAnormGadolinio').value):this.conceptosService.conceptosAttr[0].conNumero,
			attrGammagr: 						Number(this.attrForm.get('AttrGammagr').value),
			attrAmiloidosis: 					Number(this.attrForm.get('AttrAmiloidosis').value),
			attrAttrCm:  						Number(this.attrForm.get('AttrAttrCm').value),
			attrFechaAttrCm: 					this.attrForm.get('AttrFechaAttrCm').value ? 
													new Date(this.attrForm.get('AttrFechaAttrCm').value) : new Date("01/01/1999"),
			attrTipoAttrCm: 					this.attrForm.get('AttrTipoAttrCm').value ? 
													Number(this.attrForm.get('AttrTipoAttrCm').value) : this.conceptosService.conceptosAttr[0].conNumero,
			attrInterFamaco: 					Number(this.attrForm.get('AttrInterFamaco').value),
			attrOtroInterFamaco: 				this.attrForm.get('AttrOtroInterFamaco').value,
			attrDesenlace: 						null ? null : 4559,
			attrFechaFallece: 					null ? null : new Date("01/01/1999"),
			attrEdadFallece: 					0
		}

		return pacienteAttr;
	}

	ponerValoresPorOmision(paciente){	

		let pacienteAttr  = {
			AttrEtnia: 							paciente.attrEtnia,
			AttrOcupacion: 						paciente.attrOcupacion,
			AttrFechaPrimConsul:				paciente.attrFechaPrimConsul,
			AttrComorbilidad: 					paciente.attrComorbilidad,
			AttrImplanteDispositivo: 			paciente.attrImplanteDispositivo,
			AttrTipoImplanteDispositivo: 		paciente.attrTipoImplanteDispositivo,
			AttrFormaSindClinico: 				paciente.attrFormaSindClinico,
			AttrOtraFormaSindClinico: 			paciente.attrOtraFormaSindClinico,
			AttrManifestExtracardiaca: 			paciente.attrManifestExtracardiaca,
			AttrTipoManifestExtracardiaca: 		paciente.attrTipoManifestExtracardiaca,
			AttrOtroTipoManifestExtracardiaca: 	paciente.attrOtroTipoManifestExtracardiaca,
			AttrManifestElectro: 				paciente.attrManifestElectro, 
			AttrNTproBN: 						paciente.attrNTproBN,
			AttrTroponinT: 						paciente.attrTroponinT,
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

	otroSindromeClinico(tieneOtroSindromeClinico:boolean): void{
	
		this.tieneOtroSindromeClinico = tieneOtroSindromeClinico;
	
	}


	mostrarManifestacionesExtracardiacas(tieneManifestacionesExtracardiacas:boolean): void{
	
		this.tieneManifestacionesExtracardiacas = tieneManifestacionesExtracardiacas;
		
		if (!tieneManifestacionesExtracardiacas) { this.tieneOtrasManifestacionesExtracardiacas = tieneManifestacionesExtracardiacas; }
	
	}



	otrasManifestacionesExtracardiacas(tieneOtrasManifestacionesExtracardiacas:boolean): void{
	
		this.tieneOtrasManifestacionesExtracardiacas = tieneOtrasManifestacionesExtracardiacas;
	
	}



	mostrarGrosorVentriculoIzquierdo(tieneGrosorVentriculoIzquierdo:boolean): void{

		this.tieneGrosorVentriculoIzquierdo = tieneGrosorVentriculoIzquierdo;

	}


	mostrarResonanciaMagnetica(tieneResonanciaMagnetica:boolean): void{
		this.tieneResonanciaMagnetica = tieneResonanciaMagnetica;
	}
	

	mostrarAttr(tieneAtter:boolean): void{
		this.tieneAtter = tieneAtter;
	}


	otraInvervencionFarmacologica(tieneOtraInvervencionFarmacologica:boolean): void{
		this.tieneOtraInvervencionFarmacologica = tieneOtraInvervencionFarmacologica;
	}


	mostrarHospitalizacionesFCardiaca(tieneHospitalizacionesFCardiaca:boolean): void{
		this.tieneHospitalizacionesFCardiaca = tieneHospitalizacionesFCardiaca;
	}

	public ageFromDateOfBirthday(dateOfBirth: any): number {
		const today = new Date();
		const birthDate = new Date(dateOfBirth);
		let age = today.getFullYear() - birthDate.getFullYear();
		const m = today.getMonth() - birthDate.getMonth();
		
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		
		return age;
	}
}
