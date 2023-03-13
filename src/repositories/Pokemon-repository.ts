import { Pokemon, PokeProps } from "../entities/Pokemon";
import { ResponsePoke } from "../http/helper";

export interface PokemonRepository {
  findByAll(): Promise<any>;

  findByName(name: string): Promise<Pokemon>;

  findByType(types: string): Promise<Pokemon>;
}
