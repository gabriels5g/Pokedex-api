import { PrismaClient } from "@prisma/client";
import express from "express";
import { PokemonController } from "./controller/pokemon.controller";

const app = express();
app.use(express.json());

const pokemonController = new PokemonController();

app.get("/", (req, res) => {
  pokemonController.GetFindAll(req, res);
});

app.get("/name/:name", (req, res) => {
  pokemonController.GetFindByName(req, res);
});

app.get("/type/:type", (req, res) => {
  pokemonController.GetFindByType(req, res);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
