import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("users")
export default class User {
    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    isAdmin: boolean;

    @Column()
    createdOn: Date;

    @Column()
    updatedOn: Date;
};