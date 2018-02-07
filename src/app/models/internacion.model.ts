
export class InternacionIngreso {
    constructor(
            public _id: string,
            public ingreso_fecha: Date,
            public ingreso_enfermedad_actual: string,
            public ingreso_motivo_internacion: string,
            public ingreso_saps3: string,
            public ingreso_apache2: string,
            public ingreso_cie10: string,
            public IdPaciente: string,
            public ingreso_cama: String
          ) { }
}

export class InternacionEpicrisis {
  constructor(
    public _id: string,
    public epicrisis_fecha: Date,
    public epicrisis_detalle: string,
    public epicrisis_cie10: string,
    public epicrisis_complicaciones: string,
    public epicrisis_estado: string
  ) { }
}
