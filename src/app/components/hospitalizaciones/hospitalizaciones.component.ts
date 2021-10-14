import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Models
import { Hospitalizacion } from 'src/app/models/hospitalizaciones';
import { hisPaciente } from 'src/app/models/hisPaciente';
import { PacienteAttr } from 'src/app/models/pacienteAttr';

//Services
import { HospitalizacionesService } from 'src/app/services/hospitalizaciones.service';
import { ConceptosService } from 'src/app/services/conceptos.service';

@Component({
  selector: 'app-hospitalizaciones',
  templateUrl: './hospitalizaciones.component.html',
  styleUrls: []
})
export class HospitalizacionesComponent implements OnChanges {
	
	hospitalizacionForm: FormGroup;

	tieneHospitalizacionesFCardiaca             = false;

	@Input() hospitalizaciones: Hospitalizacion[]		= [];
	@Input() hisPaciente: hisPaciente 			= {} as hisPaciente;
	@Input() pacienteAttr: PacienteAttr 		= {} as PacienteAttr;

  	constructor(private 	formBuilder: FormBuilder,
				public		hospitalizacionesService: HospitalizacionesService,
				public  	conceptosService: ConceptosService) { }

	ngOnChanges(changes: SimpleChanges): void {
		this.crearFormularios();
	}

  	crearFormularios():void{

		this.hospitalizacionForm = this.formBuilder.group({
			attrIngresoUltimaHosp: ['',Validators.required],
			attrEgresoUltimaHosp: ['',Validators.required],
			attrDiagUltimaHosp: ['',Validators.required],
			attrDiagEgresoUltimaHosp: ['',Validators.required],
		});
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


	mostrarHospitalizacionesFCardiaca(tieneHospitalizacionesFCardiaca: boolean): void{
		this.tieneHospitalizacionesFCardiaca = tieneHospitalizacionesFCardiaca;
	}

}
