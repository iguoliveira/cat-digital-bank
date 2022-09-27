import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { User } from "src/user/entities/user.entity";

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

    @Column({ length: 255 })
    password: string

    @ManyToOne(() => User, user => user.card, {onDelete: 'CASCADE'})
    @JoinColumn()
    user: User
}