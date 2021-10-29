import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
//Models
import { Encuesta } from 'src/app/models/encuesta';
import { hisPaciente } from 'src/app/models/hisPaciente';
import { PacienteAttr } from 'src/app/models/pacienteAttr';
//Services
import { ConceptosService } from 'src/app/services/conceptos.service';
import { EncuestasService } from 'src/app/services/encuestas.service';

@Component({
  selector: 'app-encuesta-attr',
  templateUrl: './encuesta-attr.component.html',
  styleUrls: []
})
export class EncuestaAttrComponent implements OnChanges {

	encuestaForm: FormGroup;

	flagCabmiaValorEncuesta: boolean			= false;
	flagEditarEncuesta: boolean					= false;

	@Input() encuestas: Encuesta[]				= [];
	@Input() hisPaciente: hisPaciente 			= {} as hisPaciente;
	@Input() pacienteAttr: PacienteAttr 		= {} as PacienteAttr;

	constructor(private 	formBuilder: FormBuilder,
				private		toastr:ToastrService,
				public		encuestaService: EncuestasService,
				public  	conceptosService: ConceptosService) { }
	
		ngOnChanges(changes: SimpleChanges): void {
		this.crearFormularios();
	}

	crearFormularios():void{
	
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
		
		
		
		this.encuestaForm.valueChanges.subscribe(x => {
			this.flagCabmiaValorEncuesta = true;
		})
		
		this.limpiarEncuesta();
	
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
					this.toastr.success('Registro gregado', 'El registro fue agregado correctamente');
				},
				error => {
					console.log(error);	
					this.toastr.error('Error', 'Hubo un error al crear el registro');
				}
			);

		} else {
			this.encuestaService.actualizarEncuesta(encuestaAttr).subscribe(
				data => {
					this.obtenerEncuestas();
					this.limpiarEncuesta();
					this.flagEditarEncuesta = false;
					this.flagCabmiaValorEncuesta = false;
					this.toastr.success('Registro actualizado', 'El registro fue actualizado correctamente');

				},
				error => {
					this.toastr.error('Error', 'Hubo un error al actualizar el registro');
				}
			);
		}

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


}
