import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Comorbilidad } from '../models/comorbildad';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComorbilidadesService {
  apUrl 					= environment.appUrl;
  apiUrl 					= environment.apiUrl;
  userId 					= environment.userId;
  hospitalizaciones: Comorbilidad[];
  constructor(private http: HttpClient) { }

  obtenerComorbilidades(pacienteId: number){
    return this.http.get(this.apUrl + this.apiUrl + 'comorbilidad/get' + this.userId  + `&AttrPacNum=${pacienteId}`)
            .pipe(map( (data:any) => data.list));
  }

  guardarComorbilidad(comorbilidad: Comorbilidad): Observable<Comorbilidad>
  {
    return this.http.post<Comorbilidad>(this.apUrl + this.apiUrl + 'comorbilidad/create',{comorbilidad:comorbilidad,userId:1})
    
  }
}
