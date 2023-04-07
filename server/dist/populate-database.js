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
const populateDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const client = await pool.connect();
        fetch("https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json").then((res) => console.log(res));
    }
    catch (error) {
        console.log("error :(");
    }
});
populateDatabase();
//# sourceMappingURL=populate-database.js.map