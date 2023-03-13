import { Request, Response } from "express";
import { PrismaRepository } from "../http/prisma-repository";
import { PokemonRepository } from "../repositories/Pokemon-repository";
import { PokedexUseCase } from "../UseCases/Pokedex-useCases";

export class PokemonController {
  async handle(req: Request, res: Response) {
    const repository = new PrismaRepository();
    const pokemonList = new PokedexUseCase(repository);

    const pokemons = await pokemonList.execute();

    res.json(pokemons);
  }
}
