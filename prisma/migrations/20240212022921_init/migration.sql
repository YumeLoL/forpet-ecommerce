-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "CollectionType" ADD VALUE 'CAT';
ALTER TYPE "CollectionType" ADD VALUE 'DOG';
ALTER TYPE "CollectionType" ADD VALUE 'OTHER';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ProductSize" ADD VALUE 'EACH';
ALTER TYPE "ProductSize" ADD VALUE 'KG2';
ALTER TYPE "ProductSize" ADD VALUE 'KG4';
ALTER TYPE "ProductSize" ADD VALUE 'KG8';
