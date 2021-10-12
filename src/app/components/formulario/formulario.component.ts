import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioMlfhService } from '../../services/formulario-mlfh.service';
import { hisPaciente } from 'src/app/models/hisPaciente';
import { Concepto } from 'src/app/models/concepto';
import { ConceptosService } from 'src/app/services/conceptos.service';
import { PacienteAttr } from 'src/app/models/pacienteAttr';
import { PacientesService } from '../../services/pacientes.service';
import { HospitalizacionesService } from '../../services/hospitalizaciones.service';
import { Hospitalizacion } from 'src/app/models/hospitalizaciones';
import { Encuesta } from 'src/app/models/encuesta';
import { EncuestasService } from 'src/app/services/encuestas.service';
import { CalidadVidaService } from 'src/app/services/calidad-vida.service';
import { CalidadVida } from 'src/app/models/calidadVida';
import { BiomarcadoresService } from 'src/app/services/biomarcadores.service';
import { Biomarcador } from '../../models/biomarcador';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: []
})
export class FormularioComponent implements OnInit {
	attrForm: FormGroup;
	hospitalizacionForm: FormGroup;
	encuestaForm: FormGroup;
	hisPaciente: hisPaciente;
	calidadVidaForm: FormGroup;
	biomarcadoresForm: FormGroup;

	conceptos: Concepto;
	pacienteEdad: number;
	flagExistePaciente: boolean;
	flagEditarEncuesta: boolean					= false;
	flagCabmiaValorEncuesta: boolean			= false;
	pacienteAttr: PacienteAttr					= {} as PacienteAttr;
	hospitalizaciones: Hospitalizacion[]		= [];
	encuestas: Encuesta[]						= [];
	calidadesVida: CalidadVida[]				= [];
	biomarcadores: Biomarcador[]				= [];

	implanteCardiaco                            = false;
	tieneOtroSindromeClinico                    = false;
	tieneManifestacionesExtracardiacas          = false;
	tieneOtrasManifestacionesExtracardiacas     = false;
	tieneGrosorVentriculoIzquierdo              = false;
	tieneResonanciaMagnetica                    = false;
	tieneAtter                                  = false;
	tieneOtraInvervencionFarmacologica          = false;
	tieneHospitalizacionesFCardiaca             = false;
	formularioMlfh: any                         = {};
	loading										= true;
	tieneBiomarcador							= false;
	
	
	constructor( private  	forumlarioMLFHService: FormularioMlfhService,
	             private  	routerAtive: ActivatedRoute,
	             private  	router:	Router,
	             private 	formBuilder: FormBuilder,
	             public  	conceptosService: ConceptosService,
	             public 	pacientesService:	PacientesService,
				 public		hospitalizacionesService: HospitalizacionesService,
				 public		encuestaService: EncuestasService,
				 public		calidadVidaService: CalidadVidaService,
				 public 	biomarcadoresServices: BiomarcadoresService) 
	{
	
		// Se obtiene la información de la ruta
		this.hisPaciente = this.router.getCurrentNavigation().extras.state.paciente as hisPaciente;
		this.conceptos = this.router.getCurrentNavigation().extras.state.concepto as Concepto;
	
		// Se calcula la edad del paciente
		this.pacienteEdad = this.ageFromDateOfBirthday(this.hisPaciente.pacFechaNac);
			
	
	}

	ngOnInit(): void {
		
		this.pacientesService.obtenerPacienteAttr(this.hisPaciente.pacNumero).subscribe(
			data => {
			
				this.pacienteAttr  = data as PacienteAttr;
				this.flagExistePaciente = true;
				this.ponerValoresPorOmision(this.pacienteAttr);
				this.loading = false;
				this.obtenerHospitalizaciones();
				this.obtenerEncuestas();
				this.obtenerCalidadVida();
				this.obtenerBiomarcadores();
			
			},
			(error) => {
				console.log(error);
				
				this.pacienteAttr  = {} as PacienteAttr;
				this.flagExistePaciente = false;
			
			}
		);
	
			
		// this.routerAtive.params.subscribe(params => {
		// 	this.getFormulario();
		// });
		this.crearFormularios();
		this.onChanges();
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

		this.hospitalizacionForm = this.formBuilder.group({
			attrIngresoUltimaHosp: ['',Validators.required],
			attrEgresoUltimaHosp: ['',Validators.required],
			attrDiagUltimaHosp: ['',Validators.required],
			attrDiagEgresoUltimaHosp: ['',Validators.required],
		});

		this.encuestaForm = this.formBuilder.group({
			attrEncId: [''],

			attrIsuficiencia: [''],
			attrHinchazon: [''],
			attrDesncanso: [''],

			attrDificCaminar: [''],
			attrDificJardin: [''],
			attrDificAfuera: [''],

			attrDificDormir: [''],
			attrDificSocial: [''],
			attrDificTrabajo: [''],

			attrDificHobbie: [''],
			attrDificSexual: [''],
			attrDificCoidas: [''],

			attrDificRespir: [''],
			attrFatiga: [''],
			attrHospital: [''],

			attrCostoMedico: [''],
			attrEfectoSecund: [''],
			attrCargaFamili: [''],

			attrAutoControl: [''],
			attrPreocuparse: [''],
			attrConcentrarse: [''],

			attrDepresion: ['']
		});

		this.calidadVidaForm = this.formBuilder.group({
			attrFechaControlCalidad: ['',Validators.required],
			attrMovilidad: ['',Validators.required],
			attrDolMalest: ['',Validators.required],
			attrAnsiDepre: ['',Validators.required],
			attrCuidPerso: ['',Validators.required],
			attrActiCotid: ['',Validators.required]
		});

		this.encuestaForm.valueChanges.subscribe(x => {
			this.flagCabmiaValorEncuesta = true;
		})
		
		this.biomarcadoresForm = this.formBuilder.group({
			attrNtProBnp: ['',Validators.required],
			attrTroponinT: ['',Validators.required]
		 });

	}

	getFormulario(): void{
		this.formularioMlfh = this.forumlarioMLFHService.getforumlariomlfh();
	}

	guadarPaciente(){

		this.loading = true;
		const pacienteAttr: PacienteAttr = this.crearPacienteAttr();

		if (!this.flagExistePaciente) {
			
			this.pacientesService.guardarPacienteAttr(pacienteAttr).subscribe((data: any) => {

				this.loading = false;
				
			});

		}else{
			
			this.pacientesService.actualizarPacienteAttr(pacienteAttr).subscribe((data: any) => {

				this.loading = false;
				
			});
		}
		
	}

	guardarHospitalizacion(){

		this.hospitalizacionesService.guardarHospitalizacion(this.crearHospitalizacon())
		.subscribe(
			data => {
				this.obtenerHospitalizaciones();
				this.hospitalizacionForm.reset();
				this.tieneHospitalizacionesFCardiaca = false;
			},
			error => {
				console.log(error);	
			}
		);
	}

	guardarEncuesta(){
		
		const encuestaAttr: Encuesta = this.crearEncuesta();

		if (!this.flagEditarEncuesta) {

			this.encuestaService.guardarEncuesta(encuestaAttr)
			.subscribe(
				data => {
					this.obtenerEncuestas();
					this.limpiarEncuesta();
					this.flagCabmiaValorEncuesta = false;
				},
				error => {
					console.log(error);	
				}
			);

		} else {
			this.encuestaService.actualizarEncuesta(encuestaAttr).subscribe(
				data => {
					this.obtenerEncuestas();
					this.limpiarEncuesta();
					this.flagEditarEncuesta = false;
					this.flagCabmiaValorEncuesta = false;
				},
				error => {
					console.log(error);	
				}
			);
		}

	}


	guardarCalidadVida(){
		this.calidadVidaService.guardarCalidadVida(this.crearCalidadVida()).subscribe(
			data => {
				this.obtenerCalidadVida();
				this.limpiarCalidadVida();
			},
			error => {
				console.log(error);	
			}
		);
	}

	guardarBiomarcadores(){
		this.biomarcadoresServices.guardarBiomarcadores(this.crearBiomarcadores())
		.subscribe(
			data => {
				this.obtenerBiomarcadores();
				this.limpiarBiomarcadores();
			},
			error => {
				console.log(error);	
			}
		);
	}

	

	crearHospitalizacon(): Hospitalizacion{
		const hospitalizacion: Hospitalizacion = {
		    attrPacNum: this.hisPaciente.pacNumero,
		    attrIngresoUltimaHosp: new Date(this.hospitalizacionForm.get('attrIngresoUltimaHosp').value),
		    attrEgresoUltimaHosp: new Date(this.hospitalizacionForm.get('attrEgresoUltimaHosp').value),
		    attrDiagUltimaHosp: Number(this.hospitalizacionForm.get('attrDiagUltimaHosp').value),
		    attrDiagEgresoUltimaHosp: Number(this.hospitalizacionForm.get('attrDiagEgresoUltimaHosp').value),
		};

		return hospitalizacion;
	}

	crearBiomarcadores(): Biomarcador{
		const biomarcador: Biomarcador = {
		    attrPacNum: this.hisPaciente.pacNumero,
		    attrNtProBnp: Number(this.biomarcadoresForm.get('attrNtProBnp').value),
		    attrTroponinT: Number(this.biomarcadoresForm.get('attrTroponinT').value),
			CreateDate: new Date()
		};

		return biomarcador;
	}

	crearEncuesta(): Encuesta{
		const encuesta: Encuesta = {
			attrEncId: Number(this.encuestaForm.get('attrEncId').value),
		    attrNumero: this.hisPaciente.pacNumero,
		    attrIsuficiencia: Number(this.encuestaForm.get('attrIsuficiencia').value),
		    attrHinchazon: Number(this.encuestaForm.get('attrHinchazon').value),
		    attrDesncanso: Number(this.encuestaForm.get('attrDesncanso').value),

		    attrDificCaminar: Number(this.encuestaForm.get('attrDificCaminar').value),
		    attrDificJardin: Number(this.encuestaForm.get('attrDificJardin').value),
		    attrDificAfuera: Number(this.encuestaForm.get('attrDificAfuera').value),

		    attrDificDormir: Number(this.encuestaForm.get('attrDificDormir').value),
		    attrDificSocial: Number(this.encuestaForm.get('attrDificSocial').value),
		    attrDificTrabajo: Number(this.encuestaForm.get('attrDificTrabajo').value),

		    attrDificHobbie: Number(this.encuestaForm.get('attrDificHobbie').value),
		    attrDificSexual: Number(this.encuestaForm.get('attrDificSexual').value),
		    attrDificCoidas: Number(this.encuestaForm.get('attrDificCoidas').value),

		    attrDificRespir: Number(this.encuestaForm.get('attrDificRespir').value),
		    attrFatiga: Number(this.encuestaForm.get('attrFatiga').value),
		    attrHospital: Number(this.encuestaForm.get('attrHospital').value),

		    attrCostoMedico: Number(this.encuestaForm.get('attrCostoMedico').value),
		    attrEfectoSecund: Number(this.encuestaForm.get('attrEfectoSecund').value),
		    attrCargaFamili: Number(this.encuestaForm.get('attrCargaFamili').value),

		    attrAutoControl: Number(this.encuestaForm.get('attrAutoControl').value),
		    attrPreocuparse: Number(this.encuestaForm.get('attrPreocuparse').value),
		    attrConcentrarse: Number(this.encuestaForm.get('attrConcentrarse').value),

		    attrDepresion: Number(this.encuestaForm.get('attrDepresion').value)

		};

		return encuesta;
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

	crearCalidadVida(): CalidadVida{
		const calidadVida: CalidadVida = {
			attrNumero:					this.hisPaciente.pacNumero,
			attrFechaControlCalidad: 	new Date(this.calidadVidaForm.get('attrFechaControlCalidad').value),
			attrMovilidad: 				Number(this.calidadVidaForm.get('attrMovilidad').value),
			attrDolMalest: 				Number(this.calidadVidaForm.get('attrDolMalest').value),
			attrAnsiDepre: 				Number(this.calidadVidaForm.get('attrAnsiDepre').value),
			attrCuidPerso: 				Number(this.calidadVidaForm.get('attrCuidPerso').value),
			attrActiCotid: 				Number(this.calidadVidaForm.get('attrActiCotid').value)

		};
		
		return calidadVida;
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

	obtenerHospitalizaciones(): void{

		this.hospitalizacionesService.obtenerHospitalizaciones(this.pacienteAttr.attrNumero).subscribe(
			data => {
				
				this.hospitalizaciones = data as Hospitalizacion[];
			},
			(error)=>{

				console.log(error);

			}
		);
	}

	obtenerEncuestas(): void{

		this.encuestaService.obtenerEncuestas(this.pacienteAttr.attrNumero).subscribe(
			data => {
				
				this.encuestas = data as Encuesta[];
			},
			(error)=>{

				console.log(error);

			}
		);
	}

	obtenerCalidadVida(): void{
		this.calidadVidaService.obtenerCalidadVida(this.pacienteAttr.attrNumero).subscribe(
			data => {
				
				this.calidadesVida = data as CalidadVida[];
			},
			(error)=>{

				console.log(error);

			}
		);
	}


	obtenerBiomarcadores(): void{
		this.biomarcadoresServices.obtenerBiomarcadores(this.pacienteAttr.attrNumero).subscribe(
			data => {
				
				this.biomarcadores = data as Biomarcador[];
			},
			(error)=>{

				console.log(error);

			}
		);
	}

	editarEncuesta(encuesta:Encuesta): void{
		
		let encuestaForm = {
			attrEncId: encuesta.attrEncId,
			attrIsuficiencia: encuesta.attrIsuficiencia,
			attrHinchazon: encuesta.attrHinchazon,
			attrDesncanso: encuesta.attrDesncanso,

			attrDificCaminar: encuesta.attrDificCaminar,
			attrDificJardin: encuesta.attrDificJardin,
			attrDificAfuera: encuesta.attrDificAfuera,

			attrDificDormir: encuesta.attrDificDormir,
			attrDificSocial: encuesta.attrDificSocial,
			attrDificTrabajo: encuesta.attrDificTrabajo,

			attrDificHobbie: encuesta.attrDificHobbie,
			attrDificSexual: encuesta.attrDificSexual,
			attrDificCoidas: encuesta.attrDificCoidas,

			attrDificRespir: encuesta.attrDificRespir,
			attrFatiga: encuesta.attrFatiga,
			attrHospital: encuesta.attrHospital,

			attrCostoMedico: encuesta.attrCostoMedico,
			attrEfectoSecund: encuesta.attrEfectoSecund,
			attrCargaFamili: encuesta.attrCargaFamili,

			attrAutoControl: encuesta.attrAutoControl,
			attrPreocuparse: encuesta.attrPreocuparse,
			attrConcentrarse: encuesta.attrConcentrarse,

			attrDepresion: encuesta.attrDepresion
		}

		this.flagEditarEncuesta = true;
		this.encuestaForm.setValue(encuestaForm);

	}


	limpiarEncuesta(): void{

		this.flagCabmiaValorEncuesta = false;
		this.flagEditarEncuesta = false;

		let encuestaForm = {
			attrEncId: this.conceptosService.getNotValidId(),
			attrIsuficiencia: this.conceptosService.getNotValidId(),
			attrHinchazon: this.conceptosService.getNotValidId(),
			attrDesncanso: this.conceptosService.getNotValidId(),

			attrDificCaminar: this.conceptosService.getNotValidId(),
			attrDificJardin: this.conceptosService.getNotValidId(),
			attrDificAfuera: this.conceptosService.getNotValidId(),

			attrDificDormir: this.conceptosService.getNotValidId(),
			attrDificSocial: this.conceptosService.getNotValidId(),
			attrDificTrabajo: this.conceptosService.getNotValidId(),

			attrDificHobbie: this.conceptosService.getNotValidId(),
			attrDificSexual: this.conceptosService.getNotValidId(),
			attrDificCoidas: this.conceptosService.getNotValidId(),

			attrDificRespir: this.conceptosService.getNotValidId(),
			attrFatiga: this.conceptosService.getNotValidId(),
			attrHospital: this.conceptosService.getNotValidId(),

			attrCostoMedico: this.conceptosService.getNotValidId(),
			attrEfectoSecund: this.conceptosService.getNotValidId(),
			attrCargaFamili: this.conceptosService.getNotValidId(),

			attrAutoControl: this.conceptosService.getNotValidId(),
			attrPreocuparse: this.conceptosService.getNotValidId(),
			attrConcentrarse: this.conceptosService.getNotValidId(),

			attrDepresion: this.conceptosService.getNotValidId()
		}
		
		this.encuestaForm.setValue(encuestaForm);
	}


	
	limpiarCalidadVida(): void{
		let calidadVidaForm = {
			attrFechaControlCalidad: null,
			attrMovilidad: this.conceptosService.getNotValidId(),
			attrDolMalest: this.conceptosService.getNotValidId(),
			attrAnsiDepre: this.conceptosService.getNotValidId(),
			attrCuidPerso: this.conceptosService.getNotValidId(),
			attrActiCotid: this.conceptosService.getNotValidId()
		}

		this.calidadVidaForm.setValue(calidadVidaForm);
		
	}

	limpiarBiomarcadores():void{
		this.tieneBiomarcador = false;
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

	mostrarBiomarcador(tieneBiomarcador):void{
		this.tieneBiomarcador = tieneBiomarcador;
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
