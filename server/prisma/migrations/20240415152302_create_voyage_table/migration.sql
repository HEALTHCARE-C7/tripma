/*
  Warnings:

  - You are about to drop the column `arrivale` on the `voyage` table. All the data in the column will be lost.
  - Added the required column `arrival` to the `voyage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `voyage` DROP COLUMN `arrivale`,
    ADD COLUMN `arrival` VARCHAR(191) NOT NULL;
