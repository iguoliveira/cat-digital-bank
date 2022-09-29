import { Card } from 'src/card/entities/card.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255 })
    name: string

    @Column({ length: 255 })
    email: string

    @Column({ length: 11 })
    cpf: string

    @Column()
    birthDay: Date

    @Column({ length: 1 })
    sex: string

    @Column({ length: 255 })
    password: string

    @OneToMany(() => Card, card => card.user)
    card: Card[]
}