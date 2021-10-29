import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hisPaciente } from '../models/hisPaciente';
import { PacienteAttr } from '../models/pacienteAttr';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
	apUrl 					= environment.appUrl;
	apiUrl 					= environment.apiUrl;
	userId 					= environment.userId;
  hisPacientes: hisPaciente[] = [];
  pacienteAttr: any = {};

  constructor(private http: HttpClient) {

   }


	getDbPacientes(idType:number, id:string){
		this.http.get(this.apUrl + this.apiUrl + 'get/hispaciente' + this.userId  + `&pacTipoId=${idType}` + `&pacNumeroId=${id}`).toPromise()
					.then(data => {
	
					this.hisPacientes = data['list'] as hisPaciente[];
					
				});
	}

	guardarPacienteAttr(pacienteAttr:PacienteAttr): Observable<PacienteAttr>{
		return this.http.post<PacienteAttr>(this.apUrl + this.apiUrl + 'create',{paciente:pacienteAttr,userId:1})
	}

	obtenerPacienteAttr(pacienteId:number){

		return this.http.get(this.apUrl + this.apiUrl + 'GetById' + this.userId  + `&attrNumero=${pacienteId}`);

	}

	actualizarPacienteAttr(pacienteAttr:PacienteAttr): Observable<PacienteAttr>{
		return this.http.put<PacienteAttr>(this.apUrl + this.apiUrl + 'update',{paciente:pacienteAttr,userId:1})
	}
	
	// actualizarParcienteAttr(pacienteAttr:PacienteAttr)

}
