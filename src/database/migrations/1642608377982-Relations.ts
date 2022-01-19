import {MigrationInterface, QueryRunner} from "typeorm";

export class Relations1642608377982 implements MigrationInterface {
    name = 'Relations1642608377982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "store" ADD "user_id" character varying`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "UQ_1bb8bf0dd65b3e8298ef79640b7" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "store" ADD "car_id" character varying`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "UQ_303200adf9d6fd2c60d04dc64cb" UNIQUE ("car_id")`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "store" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "store" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "PK_f3172007d4de5ae8e7692759d79" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "status" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_fc218aa84e79b477d55322271b" ON "cars" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_a3ffb1c0c8416b9fc6f907b743" ON "users" ("id") `);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "FK_1bb8bf0dd65b3e8298ef79640b7" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "FK_303200adf9d6fd2c60d04dc64cb" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "FK_303200adf9d6fd2c60d04dc64cb"`);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "FK_1bb8bf0dd65b3e8298ef79640b7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3ffb1c0c8416b9fc6f907b743"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fc218aa84e79b477d55322271b"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "status" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "PK_f3172007d4de5ae8e7692759d79"`);
        await queryRunner.query(`ALTER TABLE "store" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "store" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "PK_fc218aa84e79b477d55322271b6"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "UQ_303200adf9d6fd2c60d04dc64cb"`);
        await queryRunner.query(`ALTER TABLE "store" DROP COLUMN "car_id"`);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "UQ_1bb8bf0dd65b3e8298ef79640b7"`);
        await queryRunner.query(`ALTER TABLE "store" DROP COLUMN "user_id"`);
    }

}
