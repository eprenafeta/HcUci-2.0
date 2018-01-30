import { FormGroup, FormControl, FormControlDirective, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as swal from 'sweetalert';
import { InternacionService, PacienteService, PrescripcionService } from '../../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';


// IMPORTAR MODELOS
import { Prescripcion, Farmaco, Validado } from '../../../models/prescripcion.model';
import { formArrayNameProvider, FormArrayName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-prescripcion',
  templateUrl: './prescripcion.component.html',
  styleUrls: ['./prescripcion.component.css']
})

export class PrescripcionComponent implements OnInit {
    formPrescripcion: FormGroup;
    farmaco = [];
    farmacoForm = [];
    array_prescripciones = [];
    lista_farmacos = [];
    prescripcion = new Prescripcion('', '', '', '', '', '', '', '', '', []);
  constructor(public _prescripcionService: PrescripcionService,
              public router: Router,
              public activatedRoute: ActivatedRoute) {
                activatedRoute.params.subscribe(params => {
                  const id = params['id'];
                  if (id !== 'nuevo') {
                    this.cargarPrescripcion(id, false);
                  } else {
                    console.log('es uno nuevo');
                  }
              });

               }

  ngOnInit() {
    this.formPrescripcion = new FormGroup({
      _id: new FormControl,
      farmacoActivo: new FormControl,
      internacion: new FormControl,
      fecha: new FormControl,
      dieta: new FormControl,
      kinesiologia_motora: new FormControl,
      kinesiologia_respiratoria: new FormControl,
      cabecera_grados: new FormControl,
      controles_glucemia: new FormControl,
      nota: new FormControl,
      farmacos: new FormControl,
      farmacoCantidad: new FormControl,
      farmacoFrecuencia: new FormControl,
      farmacoBuscar: new FormControl,
      farmacoId: new FormControl
    });
    this.buscarFarmaco('fisiol');
  }

  guardarFarmaco(farmaco_activo) {
   const farmacoAdd = new Farmaco(
      this.formPrescripcion.value._id,
      this.formPrescripcion.value.farmacoId,
      this.formPrescripcion.value.farmacoCantidad,
      this.formPrescripcion.value.farmacoFrecuencia,
      false,
      'FARMACO_UPDATE',
      this.formPrescripcion.value.farmacoActivo
   );
  console.log(farmacoAdd);
    
     this._prescripcionService.agregaFarmaco(farmacoAdd).subscribe((resp: any) => {
      console.log(resp);
      this.cargarPrescripcion(this.formPrescripcion.value._id, true);
     });
  }

  buscarFarmaco(valor: string) {
    if (valor.length > 3) {
      this._prescripcionService.cargaFarmacos(valor).subscribe((resp: any) => {
        this.lista_farmacos = resp.farmacos;
      });
    }
  }
  


  cargarPrescripcion(id: string, farmaco: boolean){
    console.log("CARGAR PRESCRIPCION" + id);
    this._prescripcionService.cargaPrescripcion(id)
        .subscribe(( resp: any) => {
          if (farmaco === true){
            this.prescripcion.farmacos = resp.prescripcion.farmacos;
          } else { 
            this.prescripcion = null;
            this.prescripcion = resp.prescripcion;
          }
          console.log(this.prescripcion);
        });
  }

  guardarPrescripcion(){
     const prescripcion = new Prescripcion(
        this.formPrescripcion.value._id,
        this.formPrescripcion.value.internacion,
        this.formPrescripcion.value.fecha,
        this.formPrescripcion.value.dieta,
        this.formPrescripcion.value.kinesiologia_motora,
        this.formPrescripcion.value.kinesiologia_respiratoria,
        this.formPrescripcion.value.cabecera_grados,
        this.formPrescripcion.value.controles_glucemia,
        this.formPrescripcion.value.nota,
        JSON.stringify(this.prescripcion.farmacos)
      );
      console.log(prescripcion);

      this._prescripcionService.guardarPrescripcion(prescripcion).subscribe((resp: any) => {
         // this.prescripcion = resp.prescripcion;
        console.log(resp); });

  }

  borrarFarmaco(farmaco){
     const farmacoDel = new Farmaco(
       this.formPrescripcion.value._id,
       farmaco._id,
       21,
       100,
       true,
       'FARMACO_DELETE',
       this.formPrescripcion.value.farmacoId
     );
   this._prescripcionService.patchFarmaco(farmacoDel).subscribe((resp: any) => {
    console.log(resp);
    this.cargarPrescripcion(this.formPrescripcion.value._id, true);
   });
  }

  editarFarmaco(farmaco) {
    this.buscarFarmaco(farmaco.item.elemento);
    this.farmacoForm.cantidad = farmaco.cantidad;
    this.farmacoForm.frecuencia = farmaco.frecuencia;
    this.farmacoForm.farmaco_activo = farmaco.item._id;
    this.farmacoForm._id = farmaco._id;
  }

  validarPrescripcion(){
    const validar = new Validado(
      this.formPrescripcion.value._id,
      'PRESCRIPCION_VALIDAR'
    );
    console.log(this.prescripcion);
    this._prescripcionService.validarPrescripcion(validar).subscribe((resp: any) => {
      console.log(resp);
      this.cargarPrescripcion(this.formPrescripcion.value._id, true);
    });
  }

}
