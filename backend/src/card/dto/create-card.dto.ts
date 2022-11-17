import { User } from "src/user/entities/user.entity";

export class CreateCardDto {
    number: string
    expiration: string
    code: string
    category: string
    password: string
    type: string
    user: User
}
