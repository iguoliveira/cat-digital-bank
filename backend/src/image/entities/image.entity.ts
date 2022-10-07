import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "src/user/entities/user.entity";

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    path: string

    @ManyToOne(() => User, (user) => user.image, { nullable: false, eager: true })
    @JoinColumn({name: "user_id"})
    user: User
}
