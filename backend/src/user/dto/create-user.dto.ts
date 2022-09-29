import { Card } from 'src/card/entities/card.entity'

export class CreateUserDto {
    name: string
    email: string
    cpf: string
    birthDay: Date
    sex?: string
    password: string
    card: Card[]
}
