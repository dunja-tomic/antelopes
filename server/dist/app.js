"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
const controllers_1 = __importDefault(require("./controllers"));
const controller = new controllers_1.default();
app.get("/", (req, res) => {
    res.send("The eagle has landed B-)");
});
app.get("/antelopes", (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    controller.getAntelopes(req, res, () => { });
});
app.get("/antelopes/data", (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    controller.getAntelopeData(req, res, () => { });
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map