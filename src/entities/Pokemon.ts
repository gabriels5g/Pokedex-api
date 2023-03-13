import crypto from "node:crypto";

export interface PokeProps {
  id?: string;
  name: string;
  generation: string;
  region: string;
  types: string;
  sprite_front: string;
  sprite_back: string;
}

export class Pokemon {
  constructor(private props: PokeProps) {}
  public get id(): string {
    return this.props.id;
  }
  public get name(): string {
    return this.props.name;
  }
  public get generation(): string {
    return this.props.generation;
  }
  public get types(): string {
    return this.props.types;
  }

  public get region(): string {
    return this.props.region;
  }
  public get sprite_front(): string {
    return this.props.sprite_front;
  }

  public get sprite_back(): string {
    return this.props.sprite_back;
  }
}
