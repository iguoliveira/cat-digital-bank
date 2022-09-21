import { Controller, Get } from '@nestjs/common'
import { UserService } from './users.service'
import { User } from './entities/users.entity'

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('user')
    async findAll(): Promise<User[]>{
        return this.userService.findAll()
    }
}