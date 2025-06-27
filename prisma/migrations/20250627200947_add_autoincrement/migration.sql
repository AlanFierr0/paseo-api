-- AlterTable
CREATE SEQUENCE debts_id_seq;
ALTER TABLE "Debts" ALTER COLUMN "id" SET DEFAULT nextval('debts_id_seq');
ALTER SEQUENCE debts_id_seq OWNED BY "Debts"."id";

-- AlterTable
CREATE SEQUENCE user_id_seq;
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq');
ALTER SEQUENCE user_id_seq OWNED BY "User"."id";

-- AlterTable
CREATE SEQUENCE walk_id_seq;
ALTER TABLE "Walk" ALTER COLUMN "id" SET DEFAULT nextval('walk_id_seq');
ALTER SEQUENCE walk_id_seq OWNED BY "Walk"."id";
