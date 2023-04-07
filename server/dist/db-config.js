"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const Pool = require("pg").Pool;
const pg_1 = require("pg");
exports.default = new pg_1.Pool({
    user: "me",
    host: "localhost",
    database: "antelopes",
    password: "password",
    port: 5432,
});
//# sourceMappingURL=db-config.js.map