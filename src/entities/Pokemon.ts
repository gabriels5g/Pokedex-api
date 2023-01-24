export interface PokeProps {
  id: number;
  name: string;
  generation: string;
  types: string;
  sprite_front: string;
  sprite_back: string;
}

export class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public generation: string,
    public type: string,
    public sprite_front: string,
    public sprite_back: string
  ) {}
}
