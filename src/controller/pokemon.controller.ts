import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { PokemonRepository } from "../repositories/Pokemon-repository";
import { PokedexUseCase } from "../UseCases/Pokedex-useCases";
const prisma = new PrismaClient();
const repository = new PokemonRepository(prisma);
const usecase = new PokedexUseCase(repository);

export class PokemonController {
  async GetFindByName(req: Request, res: Response) {
    const { name } = req.params;

    const pokemon = await usecase.findPokemonByName(name);
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }
    res.json(pokemon);
  }

  async GetFindByType(req: Request, res: Response) {
    const { type } = req.params;

    const pokemon = await usecase.findPokemonByType(type);
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }
    res.json(pokemon);
  }

  async GetFindAll(req: Request, res: Response) {
    const pokemon = await usecase.listAllPokemons();

    res.json(pokemon);
  }
}
