import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hisPaciente } from '../models/hisPaciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  apUrl = 'https://localhost:44377/';
  apiUrl = 'api/Pacientes/get/hispaciente';
  userId = '?UserId=1';
  hisPacientes: hisPaciente[] = [];

  constructor(private http: HttpClient) {

   }


  getDbPacientes(idType:number, id:string){
    this.http.get(this.apUrl + this.apiUrl + this.userId + `&pacTipoId=${idType}` + `&pacNumeroId=${id}`).toPromise()
                  .then(data => {

                    this.hisPacientes = data['list'] as hisPaciente[];
                    
                  });
  }
}
