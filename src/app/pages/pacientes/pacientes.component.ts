import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/service.index';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})

export class PacientesComponent implements OnInit {

  pacientes = [];

  constructor( public _pacienteService: PacienteService ) { }

  ngOnInit() {
    this.cargarPacientes();
  }

  buscarPacientes(variable: String) {
    this._pacienteService.buscarPaciente(variable).subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }


  borrarPaciente(valor){
    this._pacienteService.borrarPaciente(valor).subscribe( () => this.cargarPacientes() );
  }


  cargarPacientes() {
    this._pacienteService.cargarPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

}
