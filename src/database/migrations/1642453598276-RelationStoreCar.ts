import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationStoreCar1642453598276 implements MigrationInterface {
    name = 'RelationStoreCar1642453598276'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ADD "storeId" character varying`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "FK_3f82dbf41ae837b8aa0a27d29c3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f3172007d4de5ae8e7692759d7"`);
        await queryRunner.query(`ALTER TABLE "store" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "store" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "PK_f3172007d4de5ae8e7692759d79" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "store" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "store" ADD "userId" character varying`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "UQ_3f82dbf41ae837b8aa0a27d29c3" UNIQUE ("userId")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3ffb1c0c8416b9fc6f907b743"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdmin" DROP DEFAULT`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_f3172007d4de5ae8e7692759d7" ON "store" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_a3ffb1c0c8416b9fc6f907b743" ON "users" ("id") `);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_b7e8223712a7576c62eb7c15176" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "FK_3f82dbf41ae837b8aa0a27d29c3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "FK_3f82dbf41ae837b8aa0a27d29c3"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_b7e8223712a7576c62eb7c15176"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3ffb1c0c8416b9fc6f907b743"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f3172007d4de5ae8e7692759d7"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdmin" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_a3ffb1c0c8416b9fc6f907b743" ON "users" ("id") `);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "UQ_3f82dbf41ae837b8aa0a27d29c3"`);
        await queryRunner.query(`ALTER TABLE "store" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "store" ADD "userId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "PK_f3172007d4de5ae8e7692759d79"`);
        await queryRunner.query(`ALTER TABLE "store" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "store" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_f3172007d4de5ae8e7692759d7" ON "store" ("id") `);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "FK_3f82dbf41ae837b8aa0a27d29c3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "PK_fc218aa84e79b477d55322271b6"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "storeId"`);
    }

}
