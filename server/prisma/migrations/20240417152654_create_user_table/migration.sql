/*
  Warnings:

  - You are about to alter the column `gender` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - The values [Admin,User,AirlineCompanies] on the enum `User_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `gender` ENUM('male', 'female') NULL,
    MODIFY `role` ENUM('admin', 'user', 'airlineCompanies') NULL;
