import { User } from "src/user/entities/user.entity"

export class CreateImageDto {
    path: string
    user: User
}
