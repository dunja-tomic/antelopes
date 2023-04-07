import express from "express";
const app = express();
const port = 3001;

import AntelopeController from "./controllers";

const controller = new AntelopeController();

app.get("/", (req, res) => {
  res.send("The eagle has landed B-)");
});

app.get("/antelopes", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  controller.getAntelopes(req, res, () => {});
});

app.get("/antelopes/data", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  controller.getAntelopeData(req, res, () => {});
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
