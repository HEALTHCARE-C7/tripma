-- AlterTable
ALTER TABLE `voyage` ADD COLUMN `seats` INTEGER NOT NULL DEFAULT 10,
    MODIFY `available` BOOLEAN NOT NULL DEFAULT true;