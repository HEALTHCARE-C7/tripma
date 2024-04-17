/*
  Warnings:

  - Added the required column `departureplace` to the `voyage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `voyage` ADD COLUMN `departureplace` VARCHAR(191) NOT NULL;
