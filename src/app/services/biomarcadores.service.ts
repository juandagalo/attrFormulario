import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Biomarcador } from '../models/biomarcador';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BiomarcadoresService {
  apUrl 					= environment.appUrl;
  apiUrl 					= environment.apiUrl;
  userId 					= environment.userId;
  encuenstas: Biomarcador[];

  constructor(private http: HttpClient) { }

  obtenerBiomarcadores(pacienteId: number){
    return this.http.get(this.apUrl + this.apiUrl + 'biomarcador/get' + this.userId  + `&AttrPacNum=${pacienteId}`)
            .pipe(map( (data:any) => data.list));
  }

  guardarBiomarcadores(biomarcador: Biomarcador): Observable<Biomarcador>
  {
    return this.http.post<Biomarcador>(this.apUrl + this.apiUrl + 'biomarcador/create',{biomarcador:biomarcador,userId:1})
  }

}
