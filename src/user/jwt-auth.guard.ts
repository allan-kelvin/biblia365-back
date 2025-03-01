/**
 * 
jwt.strategy.ts: Define a estratégia JWT para verificar o token no cabeçalho Authorization e autenticar o usuário.
local.strategy.ts: Define a estratégia de autenticação local para validar o email e a senha durante o login.
jwt-payload.interface.ts: Define a estrutura do payload do token JWT.
Guards: Use JwtAuthGuard para proteger rotas que exigem autenticação via JWT.
 */
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
