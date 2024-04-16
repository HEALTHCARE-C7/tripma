/*
  Warnings:

  - You are about to drop the column `title` on the `voyage` table. All the data in the column will be lost.
  - Added the required column `arrivale` to the `voyage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `voyage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departure` to the `voyage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destination` to the `voyage` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `voyage_description_key` ON `voyage`;

-- AlterTable
ALTER TABLE `voyage` DROP COLUMN `title`,
    ADD COLUMN `arrivale` DATETIME(3) NOT NULL,
    ADD COLUMN `companyName` VARCHAR(191) NOT NULL,
    ADD COLUMN `departure` VARCHAR(191) NOT NULL,
    ADD COLUMN `destination` VARCHAR(191) NOT NULL;
