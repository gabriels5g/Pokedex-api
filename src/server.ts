import express from "express";
import { PokemonController } from "./controller/pokemon.controller";

const app = express();
app.use(express.json());

const pokemonController = new PokemonController();

app.get("/", pokemonController.handle);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
