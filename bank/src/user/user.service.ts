import { Injectable, Inject } from '@nestjs/common';
import { Repository } from "typeorm";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { USER_REPOSITORY } from "../constants"
import { ResultDto } from 'src/dto/result.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<ResultDto> {
    let user = new User()
    user.name = createUserDto.name
    user.email = createUserDto.email
    user.cpf = createUserDto.cpf
    user.password = createUserDto.password
    user.sex = createUserDto.sex
    user.birthDay = createUserDto.birthDay
    return this.userRepository.save(user)
      .then((res) => {
        return <ResultDto>{
          status: true,
          message: 'User Created!',
        }
      })
      .catch((err) => {
        return <ResultDto>{
          status: false,
          message: 'Error in register user: User Not Created!',
        }
      })
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
