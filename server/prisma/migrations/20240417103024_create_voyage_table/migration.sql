/*
  Warnings:

  - Added the required column `available` to the `voyage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `voyage` ADD COLUMN `available` BOOLEAN NOT NULL;
