/**
 * Explicação:
Passo 1: A estratégia JwtStrategy usa o passport-jwt para extrair o token JWT do cabeçalho Authorization da requisição.
Passo 2: O token é verificado com a chave secreta configurada em secretOrKey.
Passo 3: O método validate recebe o payload do token (onde você provavelmente colocou o email e o ID do usuário ao criar o token) e verifica se o usuário correspondente existe no banco de dados.
Passo 4: Se o usuário for encontrado, ele é retornado e será inserido no objeto de request.user para ser acessado em outras partes da aplicação.
Nota: A chave secreta ('secretKey') deve ser armazenada em um arquivo .env para maior segurança.
 */

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface'; // Criação da interface JwtPayload
import { UserService } from '../user/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Pega o token do header Authorization
      secretOrKey: 'secretKey', // Chave secreta para validar o token (coloque isso em um arquivo .env)
    });
  }

  async validate(payload: JwtPayload) {
    // O payload contém o 'sub' que é o ID do usuário
    const user = await this.userService.findByEmail(payload.email);
    if (!user) {
      throw new Error('User not found');
    }
    return user; // Aqui retornamos o usuário, que pode ser acessado posteriormente na requisição
  }
}
