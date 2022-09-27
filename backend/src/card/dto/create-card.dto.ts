import { User } from "src/user/entities/user.entity";

export class CreateCardDto {
    number: string
    validate: Date
    code: string
    type: string
    password: string
    user: User
}
