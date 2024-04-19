/*
  Warnings:

  - You are about to drop the column `arrival` on the `voyage` table. All the data in the column will be lost.
  - Added the required column `arrival_date` to the `voyage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `voyage` DROP COLUMN `arrival`,
    ADD COLUMN `arrival_date` DATETIME(3) NOT NULL;
