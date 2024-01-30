"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app_1 = require("firebase/app");
const db_1 = require("./src/database/db");
const Files_1 = __importDefault(require("./src/routes/Files"));
const firebaseConfig = {
    apiKey: "AIzaSyBoRfpIg0h32vy7tSF9AD71uJfGSwlo3uY",
    authDomain: "direct-builder-412720.firebaseapp.com",
    projectId: "direct-builder-412720",
    storageBucket: "direct-builder-412720.appspot.com",
    messagingSenderId: "538411677172",
    appId: "1:538411677172:web:c1406ad92ad725059d35a1",
    measurementId: "G-5M46GP65PE"
};
const appfire = (0, app_1.initializeApp)(firebaseConfig);
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middlware para que el cuerpo de la req sea un json
app.use((0, morgan_1.default)("dev"));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
(0, db_1.ConnecDb)();
app.get("/", (req, res) => {
    res.send("hola");
});
app.use(Files_1.default);
app.listen(PORT, () => {
    console.log(`el server esta escuchando en el puerto http://localhost:${PORT}`);
});
