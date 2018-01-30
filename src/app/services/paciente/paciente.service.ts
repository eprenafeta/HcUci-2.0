import { Injectable } from '@angular/core';
import { Paciente } from '../../models/paciente.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PacienteService {

  totalPacientes: Number = 0;


  constructor(public http: HttpClient) {
    console.log('SERVICIO DE PACIENTE LISTO');
   }
  cargaPaises(){
    let url = 'http://localhost:3000/datos_select/paises';
    return this.http.get(url).pipe( map(
      (resp: any) => {
        return resp.paises;
       
    }));
  }
  cargaCobertura(){
    let url = 'http://localhost:3000/datos_select/coberturas';
    return this.http.get(url).pipe( map(
      (resp) => {
        return resp;
       
    }));

  }

  buscarPaciente(variable: String){
    let url = 'http://localhost:3000/busqueda/pacientes/' + variable;
    return this.http.get(url).pipe( map(
      (resp: any) => {
        this.totalPacientes = resp.total;
        return resp.pacientes;
      }));
  }

  cargarPacientes(){
    let url = 'http://localhost:3000/pacientes';
    return this.http.get(url).pipe( map(
      (resp: any) => {
        this.totalPacientes = resp.total;
        return resp.pacientes;
      }));
  }

  cargaPaciente(id: String) {
    let url = 'http://localhost:3000/paciente/' + id;
    return this.http.get(url).pipe(map(
      (resp: any) => {
        return resp;
      }
    ));
  }

  guardarPaciente(paciente: Paciente) {
    console.log(paciente);
    if(paciente._id){ 
      console.log("acutalizando");
      let url = 'http://localhost:3000/paciente/'+paciente._id;
      return this.http.put(url, paciente);
    }else {
      console.log("Creando!");
      let url = 'http://localhost:3000/paciente';
      return this.http.post(url, paciente);
    }
    
  }

  borrarPaciente(id){
    let url = 'http://localhost:3000/paciente/'+id;
    return this.http.delete(url).pipe(map(
      resp => {
        return resp;
      }
    ));

  }

}
