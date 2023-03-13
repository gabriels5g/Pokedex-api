import { Pokemon } from "../entities/Pokemon";
import { PokemonRepository } from "../repositories/Pokemon-repository";

export class PokedexUseCase {
  constructor(private pokeRepository: PokemonRepository) {}
  async execute() {
    const pokemon = await this.pokeRepository.findByAll();

    return pokemon;
  }
}
