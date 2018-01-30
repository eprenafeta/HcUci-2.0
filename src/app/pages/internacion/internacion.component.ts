import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { swal } from 'sweetalert';
import { InternacionService, PacienteService } from '../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';

// IMPORTA MODELO
import { Internacion } from '../../models/internacion.model';
import { map } from 'rxjs/operators';
import { Paciente } from '../../models/paciente.model';
import { Cie10} from '../../models/cie10.model';
import { AppComponent } from '../../app.component';
import { Timestamp, timestamp } from 'rxjs/operators/timestamp';

@Component({
  selector: 'app-internacion',
  templateUrl: './internacion.component.html',
  styleUrls: ['./internacion.component.css']
})
export class InternacionComponent implements OnInit {
  ingreso: boolean;
  primer_registroIngresoCie10 = [];
  primer_registroEpicrisisCie10 = [];
  cie10s = [];
  
  formInternacion: FormGroup;
  // tslint:disable-next-line:whitespace
  internacion = new Internacion();
  variables: String;
  constructor(public _internacionService: InternacionService,
              public _pacienteService: InternacionService,
              public router: Router,
              
              public activatedRoute: ActivatedRoute ) {
                    activatedRoute.params.subscribe(params => {
                      const id = params['id'];
                      const modo = params['modo'];
    
                      if (id !== 'nuevo') {
                        this.cargarInternacion(id);
                        console.log ('no entra a uno nuevo');
                      } else {
                        console.log('es uno nuevo');
                        
                        //this.internacion.ingreso_fecha = d.getDate()+d.getMonth()+d.getFullYear()+d.getMinutes(); 
                      }
                      if (modo === 'ingreso'){
                        this.ingreso = true;
                      } else {
                        this.ingreso = false;
                      }
                  });
               }

  ngOnInit() {
    this.formInternacion = new FormGroup({
      _id: new FormControl,
      ingreso_fecha: new FormControl,
      ingreso_enfermedad_actual: new FormControl,
      ingreso_motivo_internacion: new FormControl,
      ingreso_saps3: new FormControl,
      ingreso_apache2: new FormControl,
      ingreso_cie10: new FormControl,
      epicrisis_fecha: new FormControl,
      epicrisis_detalle: new FormControl,
      epicrisis_cie10: new FormControl,
      epicrisis_complicaciones: new FormControl,
      epicrisis_estado: new FormControl
    });
    this.cargaCie10s('');
  }

  cargaCie10s(valor) {
    // valor = 'traum';
    this._internacionService.cargaCie10s(valor).subscribe((resp) => {
      this.cie10s = resp;
      this.cie10s.push({_id: this.primer_registroIngresoCie10['_id'],
                        descripcion: this.primer_registroIngresoCie10['descripcion']});

    });
  }

  guardaInternacion() {
    const internacion = new Internacion(
      this.formInternacion.value._id,
      this.formInternacion.value.ingreso_fecha,
      this.formInternacion.value.ingreso_enfermedad_actual,
      this.formInternacion.value.ingreso_motivo_internacion,
      this.formInternacion.value.ingreso_saps3,
      this.formInternacion.value.ingreso_apache2,
      this.formInternacion.value.ingreso_cie10,
      this.formInternacion.value.epicrisis_fecha,
      this.formInternacion.value.epicrisis_detalle,
      this.formInternacion.value.epicrisis_cie10,
      this.formInternacion.value.epicrisis_complicaciones,
      this.formInternacion.value.epicrisis_estado
    );

    this._internacionService.guardarInternacion(internacion).subscribe((resp: any) => { this.internacion = resp.internacion;
      console.log(resp); });
  }

  cargarInternacion(id: String) {
    this._internacionService.cargaInternacion(id)
        .subscribe(( resp: any) => {
          this.internacion = resp.internacion;
          console.log(this.internacion);
          this.primer_registroIngresoCie10['_id'] = resp.internacion.ingreso_cie10._id;
          this.primer_registroIngresoCie10['descripcion'] = resp.internacion.ingreso_cie10.descripcion;
          this.cargaCie10s(this.primer_registroIngresoCie10['descripcion']);
        });
  }

}
