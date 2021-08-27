import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Encuesta } from '../models/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {
  apUrl 					= 'https://localhost:44377/';
  apiUrl 					= 'api/Pacientes/';
  userId 					= '?UserId=1';
  encuenstas: Encuesta[];

  constructor(private http: HttpClient) { }

  obtenerEncuestas(pacienteId: number){
    return this.http.get(this.apUrl + this.apiUrl + 'encuesta/get' + this.userId  + `&AttrNumero=${pacienteId}`)
            .pipe(map( (data:any) => data.list));
  }

  guardarEncuesta(encuesta: Encuesta): Observable<Encuesta>{
    return this.http.post<Encuesta>(this.apUrl + this.apiUrl + 'encuesta/create',{encuesta:encuesta,userId:1})
  }
}
