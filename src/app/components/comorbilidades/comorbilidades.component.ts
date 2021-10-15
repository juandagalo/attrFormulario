import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Comorbilidad } from 'src/app/models/comorbildad';
import { hisPaciente } from 'src/app/models/hisPaciente';
import { PacienteAttr } from 'src/app/models/pacienteAttr';
import { ComorbilidadesService } from 'src/app/services/comorbilidades.service';
import { ConceptosService } from 'src/app/services/conceptos.service';

@Component({
  selector: 'app-comorbilidades',
  templateUrl: './comorbilidades.component.html',
  styleUrls: []
})
export class ComorbilidadesComponent implements OnChanges {

	comorbilidadForm: FormGroup;
	
	tieneComorbilidad             = false;
	
	@Input() comorbilidades: Comorbilidad[]		= [];
	@Input() hisPaciente: hisPaciente 		    = {} as hisPaciente;
	@Input() pacienteAttr: PacienteAttr 		= {} as PacienteAttr;

	constructor(private 	formBuilder: FormBuilder,
				private		toastr:ToastrService,
				public		comorbilidadesService: ComorbilidadesService,
				public  	conceptosService: ConceptosService) { }

	ngOnChanges(changes: SimpleChanges): void {
		this.crearFormularios();
	}

	crearFormularios():void{

		this.comorbilidadForm = this.formBuilder.group({
			attrComorb: ['',Validators.required]
		});
	}

	guardarComorbilidad(){

		this.comorbilidadesService.guardarComorbilidad(this.crearComorbilidad())
		.subscribe(
			data => {
				this.obtenerComorbilidades();
				this.comorbilidadForm.reset();
				this.tieneComorbilidad = false;
				this.toastr.success('Registro gregado', 'El registro fue agregado correctamente');

			},
			error => {
				this.toastr.error('Error', 'Hubo un error al crear el registro');	
			}
		);
	}

	crearComorbilidad(): Comorbilidad{
		const comorbilidad: Comorbilidad = {
		    attrPacNum: this.hisPaciente.pacNumero,
		    attrComorb: Number(this.comorbilidadForm.get('attrComorb').value),
			createDate: new Date()
		};

		return comorbilidad;
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

	mostrarComorbilidad(tieneComorbilidad: boolean): void{
		this.tieneComorbilidad = tieneComorbilidad;
	}

}
