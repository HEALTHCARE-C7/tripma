/*
  Warnings:

  - The values [MALE,FEMALE] on the enum `User_gender` will be removed. If these variants are still used in the database, this will fail.
  - The values [Admin,User,AirlineCompanies] on the enum `User_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `gender` ENUM('male', 'female') NULL,
    MODIFY `role` ENUM('admin', 'user', 'airlineCompanies') NULL;
