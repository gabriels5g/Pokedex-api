import { Pokemon } from "../entities/Pokemon";
import { PokemonRepository } from "../repositories/Pokemon-repository";

export class PokedexUseCase {
  private repository: PokemonRepository;

  constructor(repository: PokemonRepository) {
    this.repository = repository;
  }

  public async listAllPokemons(): Promise<Pokemon[]> {
    return this.repository.findByAll();
  }

  public async findPokemonByName(name: string): Promise<Pokemon | undefined> {
    return this.repository.findByName(name);
  }

  public async findPokemonByType(type: string): Promise<Pokemon[]> {
    return this.repository.findByType(type);
  }
}
