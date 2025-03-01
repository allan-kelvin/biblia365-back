/**
 * Explicação:
A interface define que o payload do JWT deve conter:

email: O email do usuário.
sub: O ID do usuário (no exemplo, o sub é um identificador que é frequentemente usado no JWT).

 */
export interface JwtPayload {
    email: string;
    sub: number; // Esse 'sub' pode ser o ID do usuário
  }
  