
export class Prescripcion {
    constructor(
        public _id: String,
        public internacion: String,
        public fecha: String,
        public dieta: String,
        public kinesiologia_motora: String,
        public kinesiologia_respiratoria: String,
        public cabecera_grados: String,
        public controles_glucemia: String,
        public nota: String,
        public farmacos: Array<String>,
    ) { }
}

export class Farmaco {
    constructor(
        public _idPrescripcion: String,
        public _idFarmaco: String,
        public cantidad: Number,
        public frecuencia: Number,
        public eliminado: Boolean,
        public signal_patch: String,
        public _idItem: String

    ) {}
}

export class Validado {
    constructor(
        public _idPrescripcion: String,
        public signal_patch: String
    ) {}
}
