import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Concepto } from 'src/app/models/concepto';

@Injectable({
  providedIn: 'root'
})
export class ConceptosService {

  apUrl 					= 'https://localhost:44377/';
  apiUrl 					= 'api/Pacientes/getall/conceptos';
  userId 					= '?UserId=1';
  conceptos: Concepto[];
  conceptosTi: any[];
  conceptosEtnia: any[];
  conceptosComorbilidad: any[];
  conceptosSiNo: any[];
  conceptosSi: any;
  conceptosNo: any;
  conceptosDispCardiaco: any[];
  conceptosSindClinico: any[];
  conceptosOtroSindClinico: any;
  conceptosManifesCardi: any;
  conceptosOtraManifesCardi: any;
  conceptosResMagGodoli: any[];
  conceptosTipMagGodoli: any[];
  conceptosGammagrafia: any[];
  conceptosTipoAttr: any[];
  conceptosInterFamaco: any[];
  conceptosOtraInterFamaco: any;
  conceptosAttr: any[];
  conceptosLHF: any[];

  constructor(private http: HttpClient) {

  }

  getDbConceptos(): void{
    this.http.get(this.apUrl + this.apiUrl + this.userId).toPromise()
                  .then(data => {
                    this.conceptos = data['list'] as Concepto[];

                    this.conceptosTi 				    = this.conceptos.filter(obj => obj.conTipo.trim() === 'TI');
                    this.conceptosEtnia 			    = this.conceptos.filter(obj => obj.conTipo.trim() === 'PTR');
                    this.conceptosComorbilidad 		    = this.conceptos.filter(obj => obj.conTipo.trim() === 'CMB');
                    this.conceptosSiNo 				    = this.conceptos.filter(obj => obj.conTipo.trim() === 'RSN'),
                    this.conceptosSi				    = this.conceptosSiNo.filter(obj => obj.conCodigo.trim() === 'RS')[0];
                    this.conceptosNo				    = this.conceptosSiNo.filter(obj => obj.conCodigo.trim() === 'RN')[0];
                    this.conceptosDispCardiaco 		    = this.conceptos.filter(obj => obj.conTipo.trim() === 'TDC');
                    this.conceptosSindClinico 		    = this.conceptos.filter(obj => obj.conTipo.trim() === 'PSC');
                    this.conceptosOtroSindClinico 		= this.conceptosSindClinico.filter(obj => obj.conCodigo.trim() === 'POT')[0];
                    this.conceptosManifesCardi 		    = this.conceptos.filter(obj => obj.conTipo.trim() === 'TME');
                    this.conceptosOtraManifesCardi 		= this.conceptosManifesCardi// tslint:disable-next-line: indent
															.filter(obj => obj.conCodigo.trim() === 'TOTR')[0];
                    this.conceptosResMagGodoli 		    = this.conceptos.filter(obj => obj.conTipo.trim() === 'RMNG');
                    this.conceptosTipMagGodoli 		    = this.conceptos.filter(obj => obj.conTipo.trim() === 'TRMN');
                    this.conceptosGammagrafia 		    = this.conceptos.filter(obj => obj.conTipo.trim() === 'GPTP');
                    this.conceptosTipoAttr 			    = this.conceptos.filter(obj => obj.conTipo.trim() === 'TATR');
                    this.conceptosInterFamaco 		    = this.conceptos.filter(obj => obj.conTipo.trim() === 'IFM');
                    this.conceptosOtraInterFamaco 		= this.conceptosInterFamaco// tslint:disable-next-line: indent
															.filter(obj => obj.conCodigo.trim() === 'ITR')[0];
                    this.conceptosAttr		            = this.conceptos.filter(obj => obj.conTipo.trim() === 'ATTR');
                    this.conceptosLHF		            = this.conceptos.filter(obj => obj.conTipo.trim() === 'LHF');

                  });
  }

}
