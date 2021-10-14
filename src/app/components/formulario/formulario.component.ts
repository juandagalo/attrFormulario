import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Models
import { hisPaciente } from 'src/app/models/hisPaciente';
import { Concepto } from 'src/app/models/concepto';
import { PacienteAttr } from 'src/app/models/pacienteAttr';
import { Hospitalizacion } from 'src/app/models/hospitalizaciones';
import { Encuesta } from 'src/app/models/encuesta';
import { CalidadVida } from 'src/app/models/calidadVida';
import { Biomarcador } from 'src/app/models/biomarcador';
import { Comorbilidad } from 'src/app/models/comorbildad';

//Services
import { BiomarcadoresService } from 'src/app/services/biomarcadores.service';
import { CalidadVidaService } from 'src/app/services/calidad-vida.service';
import { EncuestasService } from 'src/app/services/encuestas.service';
import { HospitalizacionesService } from 'src/app/services/hospitalizaciones.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import { ConceptosService } from 'src/app/services/conceptos.service';
import { ComorbilidadesService } from '../../services/comorbilidades.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: []
})
export class FormularioComponent implements OnInit {

	hisPaciente: hisPaciente;
	conceptos: Concepto;

	pacienteAttr: PacienteAttr					= {} as PacienteAttr;
	hospitalizaciones: Hospitalizacion[]		= [];
	encuestas: Encuesta[]						= [];
	calidadesVida: CalidadVida[]				= [];
	biomarcadores: Biomarcador[]				= [];
	comorbilidades: Comorbilidad[]				= [];

	pacienteEdad: number;
	flagExistePaciente: boolean;

	constructor(private  	router:	Router,
				private  	conceptosService: ConceptosService,
				private 	pacientesService:	PacientesService,
				private		hospitalizacionesService: HospitalizacionesService,
				private		encuestaService: EncuestasService,
				private		calidadVidaService: CalidadVidaService,
				private 	biomarcadoresServices: BiomarcadoresService,
				private 	comorbilidadesService: ComorbilidadesService) 
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
				this.obtenerHospitalizaciones();
				this.obtenerEncuestas();
				this.obtenerCalidadVida();
				this.obtenerBiomarcadores();
				this.obtenerComorbilidades();
			
			},
			(error) => {
				console.log(error);
				
				this.pacienteAttr  = {} as PacienteAttr;
			
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

	obtenerComorbilidades(): void{

		this.comorbilidadesService.obtenerComorbilidades(this.pacienteAttr.attrNumero).subscribe(
			data => {
				
				this.comorbilidades = data as Comorbilidad[];
			},
			(error)=>{

				console.log(error);

			}
		);
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
