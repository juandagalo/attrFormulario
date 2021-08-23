import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Concepto } from '../models/concepto';

@Injectable({
  providedIn: 'root'
})
export class ConceptosService {

  apUrl 					= 'https://localhost:44377/';
  apiUrl 					= 'api/Pacientes/getall/conceptos';
  userId 					= '?UserId=1';
  conceptos				: Concepto[];
  conceptosTi			: any[];
  conceptosEtnia		: any[];
  conceptosComorbilidad	: any[];
  conceptosSiNo			: any[];
  conceptosDispCardiaco	: any[];
  conceptosSindClinico	: any[];
  conceptosManifesCardi	: any[];
  conceptosResMagGodoli	: any[];
  conceptosTipMagGodoli	: any[];
  conceptosGammagrafia	: any[];
  conceptosTipoAttr		: any[];

  constructor(private http: HttpClient) {
    
  }

  getDbConceptos(){
    this.http.get(this.apUrl + this.apiUrl + this.userId).toPromise()
                  .then(data => {
                    this.conceptos = data['list'] as Concepto[];

                    this.conceptosTi 				= this.conceptos.filter(obj => {return obj.conTipo.trim() === "TI";})
                    this.conceptosEtnia 			= this.conceptos.filter(obj => {return obj.conTipo.trim() === "PTR";})
                    this.conceptosComorbilidad 		= this.conceptos.filter(obj => {return obj.conTipo.trim() === "CMB";})
                    this.conceptosSiNo 				= this.conceptos.filter(obj => {return obj.conTipo.trim() === "RSN";})
                    this.conceptosDispCardiaco 		= this.conceptos.filter(obj => {return obj.conTipo.trim() === "TDC";})
                    this.conceptosSindClinico 		= this.conceptos.filter(obj => {return obj.conTipo.trim() === "PSC";})
                    this.conceptosManifesCardi 		= this.conceptos.filter(obj => {return obj.conTipo.trim() === "TME";})
                    this.conceptosResMagGodoli 		= this.conceptos.filter(obj => {return obj.conTipo.trim() === "RMNG";})
                    this.conceptosTipMagGodoli 		= this.conceptos.filter(obj => {return obj.conTipo.trim() === "TRMN";})
                    this.conceptosGammagrafia 		= this.conceptos.filter(obj => {return obj.conTipo.trim() === "GPTP";})
                    this.conceptosTipoAttr 			= this.conceptos.filter(obj => {return obj.conTipo.trim() === "TATR";})
                                                          
                  });
  }

  getConceptos(llave:string){
    return this.conceptos.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(llave.toLowerCase()) !== -1)
  }

}
