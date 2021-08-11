import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormularioMlfhService } from '../../services/formulario-mlfh.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: []
})
export class FormularioComponent implements OnInit {

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
  

  constructor(private forumlarioMLFHService:FormularioMlfhService,
              private router:ActivatedRoute) { 

      this.router.params.subscribe(params =>{
  
        this.getFormulario();
        
      })
  }

  getFormulario(){
    this.formularioMlfh = this.forumlarioMLFHService.getforumlariomlfh();
  }

  ngOnInit(): void {
  }

  mostrarDispositivosCardiacos(implanteCardiaco:boolean){

      this.implanteCardiaco = implanteCardiaco;
      
  }

  otroSindromeClinico(tieneOtroSindromeClinico:boolean){

    this.tieneOtroSindromeClinico = tieneOtroSindromeClinico;

  }

  mostrarManifestacionesExtracardiacas(tieneManifestacionesExtracardiacas:boolean){

    this.tieneManifestacionesExtracardiacas = tieneManifestacionesExtracardiacas;

    if (!tieneManifestacionesExtracardiacas) this.tieneOtrasManifestacionesExtracardiacas = tieneManifestacionesExtracardiacas;
 

  }


  otrasManifestacionesExtracardiacas(tieneOtrasManifestacionesExtracardiacas:boolean){

    this.tieneOtrasManifestacionesExtracardiacas = tieneOtrasManifestacionesExtracardiacas;

  }


  mostrarGrosorVentriculoIzquierdo(tieneGrosorVentriculoIzquierdo:boolean){
    this.tieneGrosorVentriculoIzquierdo = tieneGrosorVentriculoIzquierdo;
  }

  mostrarResonanciaMagnetica(tieneResonanciaMagnetica:boolean){
    this.tieneResonanciaMagnetica = tieneResonanciaMagnetica;
  }

  mostrarAttr(tieneAtter:boolean){
    this.tieneAtter = tieneAtter;
  }

  otraInvervencionFarmacologica(tieneOtraInvervencionFarmacologica:boolean){
    this.tieneOtraInvervencionFarmacologica = tieneOtraInvervencionFarmacologica;
  }

  mostrarHospitalizacionesFCardiaca(tieneHospitalizacionesFCardiaca:boolean){
    this.tieneHospitalizacionesFCardiaca = tieneHospitalizacionesFCardiaca;
  }
}
