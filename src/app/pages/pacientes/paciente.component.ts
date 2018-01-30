import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as swal from 'sweetalert';
import { PacienteService } from '../../services/service.index';
import { Paciente } from '../../models/paciente.model';
import { Router, ActivatedRoute } from '@angular/router';

declare function inicia();

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styles: []
})
export class PacienteComponent implements OnInit {

  forma: FormGroup;
  paciente = new Paciente('', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
  paises = [];
  coberturas = [];
  // pacientes: Paciente[] = [];

  constructor(public _pacienteService: PacienteService,
              public router: Router,
              public activatedRoute: ActivatedRoute ) {
                  // tslint:disable-next-line:no-trailing-whitespace
                  
                activatedRoute.params.subscribe(params => {
                      let id = params['id'];
                      if (id !== 'nuevo') {
                        this.cargarPaciente(id);
                        console.log ('no entra a uno nuevo');
                      }
                  });
               }

  ngOnInit() {
    this.forma = new FormGroup({
        _id: new FormControl ,
        estado: new FormControl,
        nombres: new FormControl (this.paciente.nombres, Validators.required),
        apellidos: new FormControl,
        fnac: new FormControl,
        sexo: new FormControl,
        nro_documento: new FormControl,
        nacionalidad: new FormControl,
        telefono: new FormControl,
        celular: new FormControl,
        email: new FormControl,
        cobertura: new FormControl,
        afiliado: new FormControl,
        contacto: new FormControl,
        domicilio: new FormControl
    });
    this._pacienteService.cargaPaises().subscribe((resp) => { this.paises = resp;
    console.log(resp); });


    this._pacienteService.cargaCobertura().subscribe((resp : any) => { this.coberturas = resp.coberturas;
    console.log(this.coberturas); });

  }

  cargarPaciente(id: String) {
    this._pacienteService.cargaPaciente(id)
        .subscribe(( resp: any) => {
          this.paciente = resp.paciente;
          console.log(this.paciente)});
  }
  
  guardarPaciente() {
    if (this.forma.valid === false) {
      console.log(this.forma.errors);
    } else {
      let paciente = new Paciente(
      this.forma.value._id,
      this.forma.value.estado,
      this.forma.value.nombres,
      this.forma.value.apellidos,
      this.forma.value.fnac,
      this.forma.value.sexo,
      this.forma.value.nro_documento,
      this.forma.value.nacionalidad,
      this.forma.value.telefono,
      this.forma.value.celular,
      this.forma.value.email,
      this.forma.value.cobertura,
      this.forma.value.afiliado,
      this.forma.value.contacto,
      this.forma.value.domicilio
);
        this._pacienteService.guardarPaciente(paciente)
              .subscribe((resp:any) => {
                if (resp.ok === true){

                      this.router.navigate(['/pacientes']);

                } else {
                  console.log(resp);
                }
              });

    }
  }
}
