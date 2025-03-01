//Esses DTOs definem as informações esperadas nas requisições de login e registro.
export class RegisterDto {
    name: string;
    email: string;
    password: string;
    surname: string;
    age: number;
    church: string;
  }
  