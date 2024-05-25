export class Usuario {
    constructor(
      public nombre: string,
      public apellido: string,
      public dni: string,
      public email: string,
      public fechaNacimiento: Date
    ) {}
  }