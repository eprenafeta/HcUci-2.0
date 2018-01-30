import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/service.index';
import  {swal} from 'sweetalert';


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
    swal({
      title: "Esta seguro que desea borrar el siguien paciente?",
      text: "Una vez eliminado, no se podrán deshacer los cambios!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._pacienteService.borrarPaciente(valor).subscribe( () => this.cargarPacientes() );
        swal("El paciente ha sido eliminado", {
          icon: "success",
        });
      } 
    });

    
  }


  cargarPacientes() {
    this._pacienteService.cargarPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
      console.log(pacientes);
    });
  }

}
