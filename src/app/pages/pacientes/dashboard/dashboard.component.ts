
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlDirective, Validators } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';



// SERVICIOS

import { PacienteService, InternacionService } from '../../../services/service.index';

// MODELOS
import { Paciente, Antecedente } from '../../../models/paciente.model';
import { InternacionIngreso, InternacionEpicrisis } from '../../../models/internacion.model';
import { containerRefreshEnd } from '@angular/core/src/render3/instructions';
import { InternacionComponent } from '../../internacion/internacion.component';






@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class PacienteDashboardComponent implements OnInit {
  datos_institucion = JSON.parse(localStorage.getItem('datos_institucion'));
  paciente = [];
  cie10s = [];
  formInternacionIngreso: FormGroup;
  constructor(
    public _pacientesService: PacienteService,
    public _internacionService: InternacionService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {  activatedRoute.params.subscribe(params => {
          const id = params['id'];
          this.refreshDashboard(id);
            }); }

  ngOnInit() {
    console.log(this.datos_institucion);
    this.formInternacionIngreso = new FormGroup({
      _id: new FormControl,
      ingreso_fecha: new FormControl,
      ingreso_enfermedad_actual: new FormControl,
      ingreso_motivo_internacion: new FormControl,
      ingreso_saps3: new FormControl,
      ingreso_apache2: new FormControl,
      ingreso_cie10: new FormControl,
      ingreso_cama: new FormControl});
  }

 refreshDashboard(internacion) {
  this._pacientesService.cargaPaciente(internacion).subscribe((resp: any) => {
    this.paciente = resp.paciente;
  });
 }
  guardarIngreso() {
    const internacionIngreso = new InternacionIngreso(
        this.formInternacionIngreso.value._id,
        this.formInternacionIngreso.value.ingreso_fecha,
        this.formInternacionIngreso.value.ingreso_enfermedad_actual,
        this.formInternacionIngreso.value.ingreso_motivo_internacion,
        this.formInternacionIngreso.value.ingreso_saps3,
        this.formInternacionIngreso.value.ingreso_apache2,
        this.formInternacionIngreso.value.ingreso_cie10,
        this.paciente._id,
        this.formInternacionIngreso.value.ingreso_cama
    );
    this._internacionService.guardaIngreso(internacionIngreso).subscribe((resp: any) => {
      this.refreshDashboard(resp.paciente._id);
    });
  }

  nuevaInternacion() {
    this.router.navigate(['/internacion/ingreso/1']);
  }

  cargaCie10s(valor) {
    // valor = 'traum';
    this._internacionService.cargaCie10s(valor).subscribe((resp) => {
      this.cie10s = resp;
    });
  }

  nuevoAntecedente(valor) {
    const antecedente = new Antecedente(this.paciente._id , valor, 'NUEVO_CIE10');
    this._pacientesService.patchAntecedente(antecedente).subscribe((resp => {
       this.refreshDashboard(resp.salida.IdPaciente);
    }));
  }

  borrarAntecedente(valor) {
    const antecedente = new Antecedente(this.paciente._id , valor, 'BORRAR_CIE10');
    this._pacientesService.patchAntecedente(antecedente).subscribe((resp => {
      this.refreshDashboard(resp.salida.IdPaciente);
      
   }));
  }

}
