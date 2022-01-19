import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStore1642449172353 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "store",
                columns: [
                    {
                        name: "id",
                        type: "uuid"
                    },
                    {
                        name: "new_price",
                        type: "int"
                    },
                    {
                        name: "status",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("store");
    }

}
