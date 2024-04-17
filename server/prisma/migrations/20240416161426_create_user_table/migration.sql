/*
  Warnings:

  - You are about to alter the column `departure` on the `voyage` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `arrival` on the `voyage` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `voyage` MODIFY `departure` DATETIME(3) NOT NULL,
    MODIFY `arrival` DATETIME(3) NOT NULL;
