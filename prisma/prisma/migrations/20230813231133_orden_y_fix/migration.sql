/*
  Warnings:

  - You are about to drop the column `incono` on the `Categoria` table. All the data in the column will be lost.
  - Added the required column `icono` to the `Categoria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categoria" DROP COLUMN "incono",
ADD COLUMN     "icono" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Orden" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "pedido" JSONB NOT NULL,

    CONSTRAINT "Orden_pkey" PRIMARY KEY ("id")
);
