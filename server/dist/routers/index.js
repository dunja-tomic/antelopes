"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const router = (0, express_1.Router)();
const antelopeController = new controllers_1.default();
router.get("/antelopes", antelopeController.getAntelopes);
router.get("/antelopes/data", antelopeController.getAntelopeData);
exports.default = router;
//# sourceMappingURL=index.js.map