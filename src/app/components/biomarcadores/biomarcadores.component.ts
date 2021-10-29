import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
//Models
import { Biomarcador } from 'src/app/models/biomarcador';
import { hisPaciente } from 'src/app/models/hisPaciente';
import { PacienteAttr } from 'src/app/models/pacienteAttr';
//Services
import { BiomarcadoresService } from 'src/app/services/biomarcadores.service';

@Component({
  selector: 'app-biomarcadores',
  templateUrl: './biomarcadores.component.html',
  styleUrls: []
})
export class BiomarcadoresComponent implements OnChanges {

	biomarcadoresForm: FormGroup;

	tieneBiomarcador							= false;

	@Input() biomarcadores: Biomarcador[]		= [];
	@Input() hisPaciente: hisPaciente 			= {} as hisPaciente;
	@Input() pacienteAttr: PacienteAttr 		= {} as PacienteAttr;

  	constructor(private 	formBuilder: FormBuilder,
				private		toastr:ToastrService,
				public 		biomarcadoresServices: BiomarcadoresService) { }

  	ngOnChanges(changes: SimpleChanges): void {
    	this.crearFormularios();
  	}

	crearFormularios():void{

		this.biomarcadoresForm = this.formBuilder.group({
			attrNtProBnp: ['',Validators.required],
			attrTroponinT: ['',Validators.required]
		 });
	}

	guardarBiomarcadores(){
		this.biomarcadoresServices.guardarBiomarcadores(this.crearBiomarcadores())
		.subscribe(
			data => {
				this.obtenerBiomarcadores();
				this.limpiarBiomarcadores();
				this.toastr.success('Registro gregado', 'El registro fue agregado correctamente');
			},
			error => {
				console.log(error);	
				this.toastr.error('Error', 'Hubo un error al crear el registro');
			}
		);
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

	limpiarBiomarcadores():void{
		this.tieneBiomarcador = false;
	}

	mostrarBiomarcador(tieneBiomarcador):void{
		this.tieneBiomarcador = tieneBiomarcador;
	}



}
