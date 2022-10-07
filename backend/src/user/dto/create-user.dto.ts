import { Card } from 'src/card/entities/card.entity'
import { Image } from 'src/image/entities/image.entity'

export class CreateUserDto {
    name: string
    email: string
    cpf: string
    birthDay: Date
    sex?: string
    password: string
    image: Image[]
    card: Card[]
}
