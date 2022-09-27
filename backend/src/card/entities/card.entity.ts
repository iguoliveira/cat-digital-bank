import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 19 })
    number: string

    @Column()
    validate: Date

    @Column({ length: 3 })
    code: string

    @Column()
    type: string
}
