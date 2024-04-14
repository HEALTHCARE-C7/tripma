/*
  Warnings:

  - You are about to alter the column `phoneNumber` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `gender` VARCHAR(191) NOT NULL,
    MODIFY `phoneNumber` INTEGER NOT NULL;
