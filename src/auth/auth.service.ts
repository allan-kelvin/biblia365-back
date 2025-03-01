//Serviço que vai lidar com a autenticação e geração de JWT.
// o validateUser valida o email e a senha do usuário durante o login, 
// o login gera um token JWT e o register cria um novo usuário com a senha criptografada.

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userDto: any): Promise<User> {
    const { password } = userDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userService.create({ ...userDto, password: hashedPassword });
  }
}