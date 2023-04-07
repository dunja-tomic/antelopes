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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/**
 * Populate the local database with the antelope data.
 * First deletes all the existing antelope records then writes new ones.
 * @returns void
 */
const populateDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.antelope.deleteMany();
    return axios_1.default
        .get("https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json")
        .then((response) => {
        response.data.forEach((antelope) => __awaiter(void 0, void 0, void 0, function* () {
            yield prisma.antelope.create({
                data: {
                    name: antelope.name,
                    continent: client_1.Continent[antelope.continent.toString().toUpperCase()],
                    weight: antelope.weight,
                    height: antelope.height,
                    horns: 
                    // Edge case: convert the dash in Lyre-shaped into an underscore
                    client_1.Horns[antelope.horns.toString().replace("-", "_").toUpperCase()],
                    picture: antelope.picture,
                },
            });
        }));
    })
        .then(() => console.log("Done populating the database!"))
        .catch((error) => {
        console.error(error);
    });
});
populateDatabase()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
//# sourceMappingURL=populate-database.js.map