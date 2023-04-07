import axios from "axios";
import { Antelope, Continent, Horns, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Populate the local database with the antelope data.
 * First deletes all the existing antelope records then writes new ones.
 * @returns void
 */
const populateDatabase = async () => {
  await prisma.antelope.deleteMany();

  return axios
    .get("https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json")
    .then((response) => {
      response.data.forEach(async (antelope: Antelope) => {
        await prisma.antelope.create({
          data: {
            name: antelope.name,
            continent: Continent[antelope.continent.toString().toUpperCase()],
            weight: antelope.weight,
            height: antelope.height,
            horns:
              // Edge case: convert the dash in Lyre-shaped into an underscore
              // to avoid SQL issues
              Horns[antelope.horns.toString().replace("-", "_").toUpperCase()],
            picture: antelope.picture,
          },
        });
      });
    })
    .then(() => console.log("Done populating the database!"))
    .catch((error) => {
      console.error(error);
    });
};

populateDatabase()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
