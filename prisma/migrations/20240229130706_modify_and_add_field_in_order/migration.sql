/*
  Warnings:

  - Added the required column `paymentIntent` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `paymentStatus` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "paymentIntent" TEXT NOT NULL,
DROP COLUMN "paymentStatus",
ADD COLUMN     "paymentStatus" TEXT NOT NULL;
