import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalidadVida } from '../models/calidadVida';

@Injectable({
  providedIn: 'root'
})
export class CalidadVidaService {
  apUrl 					= 'https://localhost:44377/';
  apiUrl 					= 'api/Pacientes/';
  userId 					= '?UserId=1';
  encuenstas: CalidadVida[];

  constructor(private http: HttpClient) { }

  obtenerCalidadVida(pacienteId: number){
    return this.http.get(this.apUrl + this.apiUrl + 'calidadvida/get' + this.userId  + `&AttrNumero=${pacienteId}`)
            .pipe(map( (data:any) => data.list));
  }

  guardarCalidadVida(calidadVida: CalidadVida): Observable<CalidadVida>{
    return this.http.post<CalidadVida>(this.apUrl + this.apiUrl + 'calidadvida/create',{calidadVida:calidadVida,userId:1})
  }

}
