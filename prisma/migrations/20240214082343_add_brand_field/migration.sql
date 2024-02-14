/*
  Warnings:

  - The values [S,M,L,XL,XXL,XXXL] on the enum `ProductSize` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `colors` on the `Product` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ProductBrand" AS ENUM ('ROYAL_CANIN', 'ADVANCE', 'HILLS_PRESCRIPTION_DIET', 'ZIWI', 'DINE', 'KONG', 'MEALS_FOR_MUTTS', 'PAWS_FOR_LIFE', 'SUPERCOAT', 'BLACK_HAWK');

-- AlterEnum
BEGIN;
CREATE TYPE "ProductSize_new" AS ENUM ('EACH', 'KG2', 'KG4', 'KG8');
ALTER TABLE "Product" ALTER COLUMN "sizes" TYPE "ProductSize_new"[] USING ("sizes"::text::"ProductSize_new"[]);
ALTER TYPE "ProductSize" RENAME TO "ProductSize_old";
ALTER TYPE "ProductSize_new" RENAME TO "ProductSize";
DROP TYPE "ProductSize_old";
COMMIT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "colors",
ADD COLUMN     "brand" "ProductBrand";

-- DropEnum
DROP TYPE "ProductColor";
