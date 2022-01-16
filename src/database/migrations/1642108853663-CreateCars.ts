import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCars1642108853663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars",
                columns: [
                    {
                        name: "id",
                        type: "uuid"
                    },
                    {
                        name: "brand",
                        type: "varchar"
                    },
                    {
                        name: "model",
                        type: "varchar"
                    },
                    {
                        name: "year",
                        type: "int"
                    },
                    {
                        name: "km",
                        type: "int"
                    },
                    {
                        name: "chassis",
                        type: "varchar"
                    },
                    {
                        name: "price",
                        type: "int"
                    },
                    {
                        name: "status",
                        type: "varchar"
                    },
                    {
                        name: "color",
                        type: "varchar"
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
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars");
    }

}
