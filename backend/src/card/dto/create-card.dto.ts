import { User } from "src/user/entities/user.entity";

export class CreateCardDto {
    number: string
    validate: Date
    code: string
    category: string
    password: string
    type: string
    user: User
}
