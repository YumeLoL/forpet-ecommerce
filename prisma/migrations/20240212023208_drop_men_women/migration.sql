/*
  Warnings:

  - The values [MEN,WOMEN] on the enum `CollectionType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CollectionType_new" AS ENUM ('CAT', 'DOG', 'OTHER');
ALTER TABLE "Collection" ALTER COLUMN "types" TYPE "CollectionType_new"[] USING ("types"::text::"CollectionType_new"[]);
ALTER TABLE "Product" ALTER COLUMN "types" TYPE "CollectionType_new"[] USING ("types"::text::"CollectionType_new"[]);
ALTER TYPE "CollectionType" RENAME TO "CollectionType_old";
ALTER TYPE "CollectionType_new" RENAME TO "CollectionType";
DROP TYPE "CollectionType_old";
COMMIT;
