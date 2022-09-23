import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(cpf: string, password: string): Promise<any> {
        const user = await this.userService.findOne(cpf)
        if (user && bcrypt.compareSync(password, user.password)) {
            const { password, ...result } = user
            return { user: user }
        }
        return null
    }
}
