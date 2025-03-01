/**
 * Explicação:
Passo 1: A estratégia LocalStrategy usa o passport-local, que recebe email e senha na requisição para validar o usuário.
Passo 2: A função validate chama o serviço AuthService para verificar se o usuário existe e se a senha fornecida é válida (geralmente com o método bcrypt.compareSync).
Passo 3: Se as credenciais forem válidas, o usuário é retornado e será acessado na requisição.
Passo 4: Caso as credenciais sejam inválidas, uma exceção é lançada.

 */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' }); // Define 'email' como campo de username (em vez de 'username')
  }

  async validate(email: string, password: string) {
    // Aqui, chamamos o serviço de autenticação para validar as credenciais do usuário
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return user; // Retorna o usuário se a autenticação for bem-sucedida
  }
}
