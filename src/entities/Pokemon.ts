export interface PokeProps {
  id: number;
  name: string;
  generation: string;
  types: string;
}

export class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public generation: string,
    public type: string
  ) {}
}
