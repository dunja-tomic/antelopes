-- CreateEnum
CREATE TYPE "Continent" AS ENUM ('AFRICA', 'ASIA');

-- CreateEnum
CREATE TYPE "Horns" AS ENUM ('CURVED', 'TWISTED', 'STRAIGHT', 'SPIKY', 'SPIRALED', 'LYRE_SHAPED');

-- CreateTable
CREATE TABLE "Antelope" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30),
    "continent" "Continent" NOT NULL,
    "weight" INTEGER,
    "height" INTEGER,
    "horns" "Horns" NOT NULL,
    "picture" VARCHAR(300),

    CONSTRAINT "Antelope_pkey" PRIMARY KEY ("id")
);

