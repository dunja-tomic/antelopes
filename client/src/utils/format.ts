import { Continent, Horns } from "../data/antelope";

/**
 * Formats a Continent enum into a legible string
 * @param continent
 * @returns
 */
export const formatContinent: (continent: Continent) => string = (
  continent: Continent
) => {
  switch (continent) {
    case Continent.AFRICA: {
      return "Africa";
    }
    case Continent.ASIA: {
      return "Asia";
    }
  }
};

/**
 * Formats a Horns enum into a legible string
 * @param horns
 * @returns
 */
export const formatHorns: (horns: Horns) => string = (horns: Horns) => {
  switch (horns) {
    case Horns.CURVED: {
      return "Curved";
    }
    case Horns.LYRE_SHAPED: {
      return "Lyre-shaped";
    }
    case Horns.SPIKY: {
      return "Spiky";
    }
    case Horns.SPIRALED: {
      return "Spiraled";
    }
    case Horns.STRAIGHT: {
      return "Straight";
    }
    case Horns.TWISTED: {
      return "Twisted";
    }
  }
};
