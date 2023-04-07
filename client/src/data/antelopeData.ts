import { Continent, Horns } from "./antelope";

export type AntelopeData = {
  byContinent: AntelopeContinentData[];
  byHorns: AntelopeHornsData[];
};

export type AntelopeContinentData = {
  continent: Continent;
  count: number;
};

export type AntelopeHornsData = {
  horns: Horns;
  count: number;
};
