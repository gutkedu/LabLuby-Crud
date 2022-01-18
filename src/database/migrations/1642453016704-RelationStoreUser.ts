import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationStoreUser1642453016704 implements MigrationInterface {
    name = 'RelationStoreUser1642453016704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_f3172007d4de5ae8e7692759d7" ON "store" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_a3ffb1c0c8416b9fc6f907b743" ON "users" ("id") `);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "FK_3f82dbf41ae837b8aa0a27d29c3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "FK_3f82dbf41ae837b8aa0a27d29c3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3ffb1c0c8416b9fc6f907b743"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f3172007d4de5ae8e7692759d7"`);
    }
    

}
