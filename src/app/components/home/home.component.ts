import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hisPaciente } from 'src/app/models/hisPaciente';
import { ConceptosService } from '../../services/conceptos.service';
import { PacientesService } from '../../services/pacientes.service';
import { PacienteAttr } from '../../models/pacienteAttr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  loading:boolean     = true;
  searchForm: FormGroup;
  conceptos: any;

  constructor(private formBuilder: FormBuilder,
              private router:Router,
              public conceptosService : ConceptosService,
              public pacientesService : PacientesService) {

      this.searchForm = this.formBuilder.group({
        personIdType: ['',Validators.required],
        personId: ['',Validators.required]
      })

    this.conceptosService.getDbConceptos();
    
      
   }

  ngOnInit(): void {
    
    this.loading = false;
    this.pacientesService.hisPacientes = [];

  }

  buscarPaciente(){
    this.pacientesService.getDbPacientes(
      this.searchForm.get('personIdType').value, 
      this.searchForm.get('personId').value
    );
  }

  verFormulario(paciente:hisPaciente){

    let concepto = this.conceptosService.conceptosTi;
    let filtrado;

    filtrado = concepto.filter(obj => {
                      
      return obj.conNumero == this.searchForm.get('personIdType').value;

    })    

    this.router.navigateByUrl('/formulario', { state: {paciente: paciente, concepto : filtrado[0]} });
    
  }

}
