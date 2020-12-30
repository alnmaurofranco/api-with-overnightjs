import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateTables1607946477726 implements MigrationInterface {
  name = 'CreateTables1607946477726'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "web-version" ("id" SERIAL NOT NULL, "version" character varying NOT NULL DEFAULT \'1.0.0\', "created_at" TIME WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIME WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_4829dbb5cb3a2d30ff38877a799" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "web-seo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "desc" character varying NOT NULL, "footer" character varying NOT NULL, "url" character varying NOT NULL, "created_at" TIME WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIME WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_bcdf05266e31a47d03a1c41ad70" PRIMARY KEY ("id"))');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "web-seo"');
    await queryRunner.query('DROP TABLE "web-version"');
  }
}
