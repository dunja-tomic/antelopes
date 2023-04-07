import { RequestHandler } from "express";
import { Continent, Horns, PrismaClient } from "@prisma/client";

import {
  AntelopeContinentData,
  AntelopeHornsData,
} from "../models/AntelopeData";

const prisma = new PrismaClient();

export default class AntelopeController {
  /**
   * Query the database to get the information of all the antelopes in the database
   */
  getAntelopes: RequestHandler = async (req, res) => {
    try {
      const antelopes = await prisma.antelope.findMany({
        orderBy: {
          name: "asc",
        },
      });

      res.send(antelopes);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  /**
   * Return aggregated data about all antelopes, namely the number of
   * species that live on each continent and the number that have
   * each type of horns
   */
  getAntelopeData: RequestHandler = async (req, res) => {
    try {
      const continentMap: Map<Continent, number> = new Map<Continent, number>();
      const hornsMap: Map<Horns, number> = new Map<Horns, number>();

      const continentArray: AntelopeContinentData[] = [];
      const hornsArray: AntelopeHornsData[] = [];

      const antelopes = await prisma.antelope.findMany();

      // The idea is that we will sort the antelopes into "buckets" (map) based on
      // the continent they live in and the type of horns they have, and
      // count how many there are in each bucket.
      // Then we'll convert those maps into arrays so we can return them
      // neatly as JSON
      antelopes.forEach((antelope) => {
        continentMap.set(
          antelope.continent,
          // If the continent already exists as a key, increment the count.
          // Otherwise, set to 1
          continentMap.get(antelope.continent) + 1 || 1
        );
        hornsMap.set(antelope.horns, hornsMap.get(antelope.horns) + 1 || 1);
      });

      continentMap.forEach((count, continent) => {
        continentArray.push({
          continent,
          count,
        });
      });

      hornsMap.forEach((count, horns) => {
        hornsArray.push({
          horns,
          count,
        });
      });

      res.send({
        byContinent: continentArray,
        byHorns: hornsArray,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };
}
