import { PrismaClient } from "@prisma/client";
import { Pokemon } from "../entities/Pokemon";

export class PokemonRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async findByAll(): Promise<Pokemon[]> {
    const pokemons = await this.prisma.pokemons.findMany();
    return pokemons.map((pokemon) => this.convertToPokemon(pokemon));
  }

  public async findByName(name: string): Promise<Pokemon | undefined> {
    const pokemon = await this.prisma.pokemons.findMany({
      where: {
        name,
      },
    });
    const foundPokemon = pokemon[0];
    return foundPokemon
      ? new Pokemon(
          foundPokemon.id,
          foundPokemon.name,
          foundPokemon.generation,
          foundPokemon.type,
          foundPokemon.sprite_front,
          foundPokemon.sprite_back
        )
      : undefined;
  }

  public async findByType(type: string): Promise<Pokemon[]> {
    const pokemons = await this.prisma.pokemons.findMany({
      where: { type },
    });
    return pokemons.map((pokemon) => this.convertToPokemon(pokemon));
  }

  private convertToPokemon(pokemon: any): Pokemon {
    return new Pokemon(
      pokemon.id,
      pokemon.name,
      pokemon.generation,
      pokemon.type,
      pokemon.sprite_front,
      pokemon.sprite_back
    );
  }
}
