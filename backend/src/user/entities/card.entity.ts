import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToMany } from "typeorm";
import { User } from "./user.entity";

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

    @ManyToMany(() => User, user => user.card, {onDelete: 'CASCADE'})
    @JoinColumn()
    user: User
}
