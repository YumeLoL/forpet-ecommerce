/*
  Warnings:

  - A unique constraint covering the columns `[paymentIntent]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Made the column `paymentIntent` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "paymentIntent" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Order_paymentIntent_key" ON "Order"("paymentIntent");
