import { Continent, Horns } from "@prisma/client";

export class AntelopeData {
  byContinent: AntelopeContinentData[];
  byHorns: AntelopeHornsData[];
}

export class AntelopeContinentData {
  continent: Continent;
  count: number;
}

export class AntelopeHornsData {
  horns: Horns;
  count: number;
}
