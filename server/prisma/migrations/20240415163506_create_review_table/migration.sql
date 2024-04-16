-- CreateTable
CREATE TABLE `Review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `ratings` VARCHAR(191) NOT NULL,
    `comments` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Review_ratings_key`(`ratings`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
