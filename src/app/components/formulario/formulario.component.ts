import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioMlfhService } from '../../services/formulario-mlfh.service';
import { hisPaciente } from 'src/app/models/hisPaciente';
import { Concepto } from 'src/app/models/concepto';
import { ConceptosService } from 'src/app/services/conceptos.service';
import { PacienteAttr } from 'src/app/models/pacienteAttr';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: []
})
export class FormularioComponent implements OnInit {
	attrForm: FormGroup;
	hisPaciente:hisPaciente;
	conceptos:Concepto;
	pacienteEdad:number;
	pacienteAttr:PacienteAttr							={} as PacienteAttr;
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
              	public  	conceptosService : 		ConceptosService) {
	
		//Se obtiene la información de la ruta
		this.hisPaciente = this.router.getCurrentNavigation().extras.state.paciente as hisPaciente;
		this.conceptos = this.router.getCurrentNavigation().extras.state.concepto as Concepto;

		//Se calcula la edad del paciente
		this.pacienteEdad = this.ageFromDateOfBirthday(this.hisPaciente.pacFechaNac);
		
		//Se inicializan los conceptos desde la base de datos
		this.conceptosService.getDbConceptos();
		
      	this.routerAtive.params.subscribe(params =>{
        	this.getFormulario();
      	});
		this.attrForm = this.formBuilder.group({

			AttrEtnia: ['',Validators.required],
			AttrOcupacion: ['',Validators.required],
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
			AttrTropon: ['',Validators.required],
			AttrGrosorVentri: ['',Validators.required],
			attrFracEyecc: ['',Validators.required],
			attrDeformLong: ['',Validators.required],
			attrResoNucleGodolinio: ['',Validators.required],
			AttrTipoAnormGadolinio: ['',Validators.required],
			AttrGammag: ['',Validators.required],
			AttrAmiloidosis: ['',Validators.required],
			AttrAttrCm: ['',Validators.required],
			AttrFechaAttrCm: ['',Validators.required],
			AttrTipoAttrCm: ['',Validators.required],

		});

  }


	getFormulario(): void{
		this.formularioMlfh = this.forumlarioMLFHService.getforumlariomlfh();
	}

	ngOnInit(): void {
	}


	mostrarDispositivosCardiacos(implanteCardiaco: boolean): void{
	
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
		this.attrForm.get("attrDeformLong").setValue(this.pacienteAttr.attrDeformLong);
		this.attrForm.get("attrFracEyecc").setValue(this.pacienteAttr.attrFracEyecc);

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
