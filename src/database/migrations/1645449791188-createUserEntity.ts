import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUserEntity1645449791188 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "uuid",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "isAdmin",
                        type: "boolean",
                        isNullable: false
                    },
                    {
                        name: "createdOn",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false
                    },
                    {
                        name: "updatedOn",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
