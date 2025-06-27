/*
  Warnings:

  - The primary key for the `Debts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Walk` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `Debts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `creditorId` on the `Debts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `debtorId` on the `Debts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Walk` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Walk` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Debts" DROP CONSTRAINT "Debts_creditorId_fkey";

-- DropForeignKey
ALTER TABLE "Debts" DROP CONSTRAINT "Debts_debtorId_fkey";

-- DropForeignKey
ALTER TABLE "Walk" DROP CONSTRAINT "Walk_userId_fkey";

-- AlterTable
ALTER TABLE "Debts" DROP CONSTRAINT "Debts_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
DROP COLUMN "creditorId",
ADD COLUMN     "creditorId" INTEGER NOT NULL,
DROP COLUMN "debtorId",
ADD COLUMN     "debtorId" INTEGER NOT NULL,
ADD CONSTRAINT "Debts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Walk" DROP CONSTRAINT "Walk_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Walk_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Debts" ADD CONSTRAINT "Debts_creditorId_fkey" FOREIGN KEY ("creditorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Debts" ADD CONSTRAINT "Debts_debtorId_fkey" FOREIGN KEY ("debtorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Walk" ADD CONSTRAINT "Walk_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
