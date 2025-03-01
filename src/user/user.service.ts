//No serviço de usuários, você irá criar métodos para buscar e criar usuários no banco de dados.
//O  método findByEmail busca um usuário pelo email e o método create cria um novo usuário no banco de dados.
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(userDto: object): Promise<User> {
    const user = this.userRepository.create(userDto);
    return this.userRepository.save(user);
  }


  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } }); 
    //Aqui você irá usar o método findOne do TypeORM para buscar um usuário pelo email.
  }

}