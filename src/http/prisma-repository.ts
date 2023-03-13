import { PokemonRepository } from "../repositories/Pokemon-repository";
import { prisma } from "./prisma";

export class PrismaRepository implements PokemonRepository {
  async findByAll() {
    const pokemons = await prisma.pokemons.findMany();

    return pokemons;
  }

  async findByName(name: string): Promise<any> {
    const pokemon = await prisma.pokemons.findFirst({
      where: { name: name },
    });
    return pokemon;
  }

  async findByType(types: string): Promise<any> {
    const pokemon = await prisma.pokemons.findMany({
      where: {
        types: types,
      },
    });
    return {
      pokemon,
    };
  }
}
