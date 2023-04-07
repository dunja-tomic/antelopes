import axios from "axios";
import { Antelope } from "../data/antelope";
import { AntelopeData } from "../data/antelopeData";

/**
 * Makes a GET request to the REST API to fetch information
 * about antelopes
 * @returns a Promise which will resolve to an array of antelopes
 */
export const getAntelopes: () => Promise<Antelope[]> = async () => {
  const response = await axios.get("/antelopes");
  const responseData = response.data as Antelope[];

  return responseData;
};

/**
 * Makes a GET request to the REST API to fetch aggregate antelope data
 * @returns a Promise which will resolve to AntelopeData
 */
export const getAntelopeData: () => Promise<AntelopeData> = async () => {
  const response = await axios.get("/antelopes/data");
  const responseData = response.data as AntelopeData;

  return responseData;
};
