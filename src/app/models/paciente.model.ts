
export class Paciente {
    constructor(
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
