import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hospitalizacion } from '../models/hospitalizaciones';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HospitalizacionesService {
  apUrl 					= environment.appUrl;
  apiUrl 					= environment.apiUrl;
  userId 					= environment.userId;
  hospitalizaciones: Hospitalizacion[];
  constructor(private http: HttpClient) { }

  obtenerHospitalizaciones(pacienteId: number){
    return this.http.get(this.apUrl + this.apiUrl + 'hospitalizacion/get' + this.userId  + `&AttrPacNum=${pacienteId}`)
            .pipe(map( (data:any) => data.list));
  }

  guardarHospitalizacion(hospitalizacion: Hospitalizacion): Observable<Hospitalizacion>
  {
    return this.http.post<Hospitalizacion>(this.apUrl + this.apiUrl + 'hospitalizacion/create',{hospitalizacion:hospitalizacion,userId:1})
    
  }

}
