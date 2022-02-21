import { Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("users")
export default class User {
    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    usename: string;

    email: string;

    password: string;

    isAdmin: boolean;

    createdOn: Date;

    updatedOn: Date;
};