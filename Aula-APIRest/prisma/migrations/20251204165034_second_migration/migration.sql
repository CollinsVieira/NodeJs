/*
  Warnings:

  - Changed the type of `precio` on the `Course` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "precio",
ADD COLUMN     "precio" DOUBLE PRECISION NOT NULL;
