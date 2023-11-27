/*
  Warnings:

  - Added the required column `nameRating` to the `NameAnalysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NameAnalysis" ADD COLUMN     "nameRating" INTEGER NOT NULL;
