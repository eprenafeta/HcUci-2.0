
export class Paciente {
    constructor(
        public _id: String,
        public estado: string,
        public nombres: string,
        public apellidos: string,
        public fnac: string,
        public sexo: string,
        public nro_documento: string,
        public nacionalidad: string,
        public telefono: string,
        public celular: string,
        public email: string,
        public cobertura: string,
        public afiliado: string,
        public contacto: string,
        public domicilio: string
    ) { }
}

export class Antecedente {
    constructor (
        public IdPaciente: string,
        public IdCie10: string,
        public signal_patch: string
    ) { }
}
