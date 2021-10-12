import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Models
import { CalidadVida } from 'src/app/models/calidadVida';
import { hisPaciente } from 'src/app/models/hisPaciente';
import { PacienteAttr } from 'src/app/models/pacienteAttr';
//Services
import { CalidadVidaService } from 'src/app/services/calidad-vida.service';
import { ConceptosService } from 'src/app/services/conceptos.service';

@Component({
  selector: 'app-calidad-de-vida',
  templateUrl: './calidad-de-vida.component.html',
  styleUrls: []
})
export class CalidadDeVidaComponent implements OnChanges {

	calidadVidaForm: FormGroup;

	@Input() calidadesVida: CalidadVida[]		= [];
	@Input() hisPaciente: hisPaciente 			= {} as hisPaciente;
	@Input() pacienteAttr: PacienteAttr 		= {} as PacienteAttr;

  	constructor(private 	formBuilder: FormBuilder,
				public		calidadVidaService: CalidadVidaService,
				public  	conceptosService: ConceptosService) { }

	ngOnChanges(changes: SimpleChanges): void {
		this.crearFormularios();
	}

  	crearFormularios():void{

		this.calidadVidaForm = this.formBuilder.group({
			attrFechaControlCalidad: ['',Validators.required],
			attrMovilidad: ['',Validators.required],
			attrDolMalest: ['',Validators.required],
			attrAnsiDepre: ['',Validators.required],
			attrCuidPerso: ['',Validators.required],
			attrActiCotid: ['',Validators.required]
		});
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
}
