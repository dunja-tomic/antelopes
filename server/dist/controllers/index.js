"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AntelopeController {
    constructor() {
        /**
         * Query the database to get the information of all the antelopes in the database
         */
        this.getAntelopes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const antelopes = yield prisma.antelope.findMany({
                    orderBy: {
                        name: "asc",
                    },
                });
                res.send(antelopes);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
        /**
         * Return aggregated data about all antelopes, namely the number of
         * species that live on each continent and the number that have
         * each type of horns
         */
        this.getAntelopeData = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const continentMap = new Map();
                const hornsMap = new Map();
                const continentArray = [];
                const hornsArray = [];
                const antelopes = yield prisma.antelope.findMany();
                // The idea is that we will sort the antelopes into "buckets" (map) based on
                // the continent they live in and the type of horns they have, and
                // count how many there are in each bucket.
                // Then we'll convert those maps into arrays so we can return them
                // neatly as JSON
                antelopes.forEach((antelope) => {
                    continentMap.set(antelope.continent, 
                    // If the continent already exists as a key, increment the count.
                    // Otherwise, set to 1
                    continentMap.get(antelope.continent) + 1 || 1);
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
            }
            catch (error) {
                console.log(error);
                res.status(500).send(error);
            }
        });
    }
}
exports.default = AntelopeController;
//# sourceMappingURL=index.js.map