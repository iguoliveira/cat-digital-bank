import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto)
  }

  @Get('all')
  async findAll() {
    return this.userService.findAll();
  }

  @UseGuards(AuthGuard('local'))
  @Post('tryLogin')
  async login(@Request() req){
    return req.user
  }
}
