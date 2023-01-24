-- CreateTable
CREATE TABLE "Pokemons" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "generation" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "sprite_front" TEXT NOT NULL,
    "sprite_back" TEXT NOT NULL
);
