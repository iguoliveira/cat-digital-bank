import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { USER_REPOSITORY } from '../constants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    let user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.cpf = createUserDto.cpf;
    user.birthDay = createUserDto.birthDay;
    user.sex = createUserDto.sex;
    user.password = createUserDto.password;
    user.card = createUserDto.card;
    user.image = createUserDto.image;
    return await this.userRepository.save(user);
  }

  async findOne(cpf: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ cpf: cpf });
  }
}
