import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Concepto } from 'src/app/models/concepto';
import { ConceptosService } from '../../services/conceptos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  conceptos: any;

  constructor(private formBuilder: FormBuilder,
              public conceptosService : ConceptosService) {

      this.searchForm = this.formBuilder.group({
        personIdType: ['',Validators.required],
        personId: ['',Validators.required]
      })

      this.conceptosService.getDbConceptos();
      
   }

  ngOnInit(): void {
    
    
  }

  buscarPaciente(){
    console.log(this.searchForm);
  }

  obtenerIdentificaciones(){

     
  }
}
