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
  

  constructor(private forumlarioMLFHService: FormularioMlfhService,
              private router: ActivatedRoute) {

      this.router.params.subscribe(params =>{

        this.getFormulario();
      });
  }

  // tslint:disable-next-line: typedef
  getFormulario(){
    this.formularioMlfh = this.forumlarioMLFHService.getforumlariomlfh();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  mostrarDispositivosCardiacos(implanteCardiaco: boolean){

      this.implanteCardiaco = implanteCardiaco;
  }

  otroSindromeClinico(tieneOtroSindromeClinico:boolean): void{

    this.tieneOtroSindromeClinico = tieneOtroSindromeClinico;

  }

  // tslint:disable-next-line: typedef
  mostrarManifestacionesExtracardiacas(tieneManifestacionesExtracardiacas:boolean){

    this.tieneManifestacionesExtracardiacas = tieneManifestacionesExtracardiacas;

    if (!tieneManifestacionesExtracardiacas) { this.tieneOtrasManifestacionesExtracardiacas = tieneManifestacionesExtracardiacas; }

  }


  // tslint:disable-next-line: typedef
  otrasManifestacionesExtracardiacas(tieneOtrasManifestacionesExtracardiacas:boolean){

    this.tieneOtrasManifestacionesExtracardiacas = tieneOtrasManifestacionesExtracardiacas;

  }


  // tslint:disable-next-line: typedef
  mostrarGrosorVentriculoIzquierdo(tieneGrosorVentriculoIzquierdo:boolean){
    this.tieneGrosorVentriculoIzquierdo = tieneGrosorVentriculoIzquierdo;
  }

  // tslint:disable-next-line: typedef
  mostrarResonanciaMagnetica(tieneResonanciaMagnetica:boolean){
    this.tieneResonanciaMagnetica = tieneResonanciaMagnetica;
  }

  // tslint:disable-next-line: typedef
  mostrarAttr(tieneAtter:boolean){
    this.tieneAtter = tieneAtter;
  }

  // tslint:disable-next-line: typedef
  otraInvervencionFarmacologica(tieneOtraInvervencionFarmacologica:boolean){
    this.tieneOtraInvervencionFarmacologica = tieneOtraInvervencionFarmacologica;
  }

  // tslint:disable-next-line: typedef
  mostrarHospitalizacionesFCardiaca(tieneHospitalizacionesFCardiaca:boolean){
    this.tieneHospitalizacionesFCardiaca = tieneHospitalizacionesFCardiaca;
  }
}
