/*
  Warnings:

  - Added the required column `nombreClase` to the `Clase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clase" ADD COLUMN     "nombreClase" TEXT NOT NULL;
