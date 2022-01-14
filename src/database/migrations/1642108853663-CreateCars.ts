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
                        type: "string"
                    },
                    {
                        name: "model",
                        type: "string"
                    },
                    {
                        name: "year",
                        type: "number"
                    },
                    {
                        name: "km",
                        type: "number"
                    },
                    {
                        name: "chassis",
                        type: "string"
                    },
                    {
                        name: "price",
                        type: "number"
                    },
                    {
                        name: "status",
                        type: "string"
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
