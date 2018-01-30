import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Prescripcion, Farmaco } from '../../../models/prescripcion.model';
import { Paciente } from '../../../models/paciente.model';


@Injectable()
export class PrescripcionService {

  constructor(public http: HttpClient) {
    console.log('SERVICIO DE PACIENTE LISTO');
   }

   cargaFarmacos(valor:string) {
    let url = 'http://localhost:3000/datos_select/farmacos/' + valor;
    return this.http.get(url).pipe( map(
      (resp: any) => {
        return resp;
    }));
   }

  cargaPrescripcion(valor: string){
    let url = 'http://localhost:3000/prescripcion/' + valor;
    return this.http.get(url).pipe( map(
      (resp: any) => {
        return resp;
    }));
  }
  
   guardarPrescripcion(prescripcion: Prescripcion) {
    console.log(prescripcion);
    if (prescripcion._id) {
      console.log('acutalizando');
      let url = 'http://localhost:3000/prescripcion/'+prescripcion._id;
      return this.http.put(url, prescripcion);
    } else {
      console.log('Creando!');
      let url = 'http://localhost:3000/prescripcion/';
      return this.http.post(url, prescripcion);
    }

  }
  agregaFarmaco(farmaco) {
    let url = 'http://localhost:3000/prescripcion/farmaco/'  ;
    console.log(farmaco); 
    if (farmaco._idFarmaco) {
      return this.http.patch(url, farmaco).pipe( map(
        (resp: any) => {
          return resp;
      }));
    } else {

    return this.http.post(url, farmaco).pipe( map(
      (resp: any) => {
        return resp;
    }));
    }
  }
  patchFarmaco(patch_farmaco){
    console.log(patch_farmaco);
    let url = 'http://localhost:3000/prescripcion/farmaco/' ;
    return this.http.patch(url, patch_farmaco).pipe( map(
      (resp: any) => {
        return resp;
    }));
  }
  validarPrescripcion(validar){
    console.log(validar);
    let url = 'http://localhost:3000/prescripcion/';
    return this.http.patch(url, validar).pipe( map( 
      (resp: any) => {
        return resp;
    }));
  }

}
