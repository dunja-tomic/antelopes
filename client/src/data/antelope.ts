export type Antelope = {
  id: number;
  name: string;
  continent: Continent;
  weight: number;
  height: number;
  horns: Horns;
  picture: string;
};

export enum Continent {
  AFRICA = "AFRICA",
  ASIA = "ASIA",
}

export enum Horns {
  CURVED = "CURVED",
  TWISTED = "TWISTED",
  STRAIGHT = "STRAIGHT",
  SPIKY = "SPIKY",
  SPIRALED = "SPIRALED",
  LYRE_SHAPED = "LYRE_SHAPED",
}
