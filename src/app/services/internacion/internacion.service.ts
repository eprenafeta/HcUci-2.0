import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Internacion } from '../../models/internacion.model';
import { Paciente } from '../../models/paciente.model';
@Injectable()
export class InternacionService {

  totalPacientes: Number = 0;


  constructor(public http: HttpClient) {
    console.log('SERVICIO DE PACIENTE LISTO');
   }

   cargaCie10s(busqueda){
    let url = 'http://localhost:3000/datos_select/cie10/'+busqueda;
    return this.http.get(url).pipe( map(
      (resp: any) => {
        return resp.cie10;
    }));
  }

   cargaInternacion(id: String) {
    let url = 'http://localhost:3000/internacion/' + id;
    return this.http.get(url).pipe(map(
      (resp: any) => {
        return resp;
      }
    ));
  }

   guardarInternacion(internacion: Internacion) {
    console.log(internacion);
    if (internacion._id) {
      console.log('acutalizando');
      let url = 'http://localhost:3000/internacion/'+internacion._id;
      return this.http.put(url, internacion);
    } else {
      console.log('Creando!');
      let url = 'http://localhost:3000/internacion/';
      return this.http.post(url, internacion);
    }

  }

}
