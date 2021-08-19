import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Concepto } from '../models/concepto';

@Injectable({
  providedIn: 'root'
})
export class ConceptosService {

  apUrl = 'https://localhost:44377/';
  apiUrl = 'api/Pacientes/getall/conceptos';
  userId = '?UserId=1';
  conceptos: Concepto[];
  conceptosTi: any[];

  constructor(private http: HttpClient) {
    
  }

  getDbConceptos(){
    this.http.get(this.apUrl + this.apiUrl + this.userId).toPromise()
                  .then(data => {
                    this.conceptos = data['list'] as Concepto[];

                    this.conceptosTi = this.conceptos.filter(obj => {
                      
                      return obj.conTipo.trim() === "TI";

                    })
                                                          
                  });
  }

  getConceptos(llave:string){
    return this.conceptos.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(llave.toLowerCase()) !== -1)
  }

}
