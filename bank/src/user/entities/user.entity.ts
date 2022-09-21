import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

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
    birthDay: number

    @Column({ length: 1 })
    sex: string

    @Column({ length: 255 })
    password: string
}