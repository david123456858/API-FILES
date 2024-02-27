"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = require("./src/database/db");
const files_1 = __importDefault(require("./src/routes/files"));
const swagger_1 = __importDefault(require("./src/routes/swagger"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middlware para que el cuerpo de la req sea un json
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: true }));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
(0, db_1.ConnecDb)();
app.get("/", (req, res) => {
    res.send("Bienvenido a la APIFILE");
});
app.use(files_1.default);
app.use(swagger_1.default);
app.listen(PORT, () => {
    console.log(`el server esta escuchando en el puerto http://localhost:${PORT}`);
});
