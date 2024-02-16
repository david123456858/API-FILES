var _a;
import express from "express";
import morgan from "morgan";
import { ConnecDb } from "./src/database/db";
import routesFiles from "./src/routes/files";
import routerSwagger from "./src/routes/swagger";
const app = express();
app.use(express.json()); //middlware para que el cuerpo de la req sea un json
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
ConnecDb();
app.get("/", (req, res) => {
    res.send("Bienvenido a la APIFILE");
});
app.use(routesFiles);
app.use(routerSwagger);
app.listen(PORT, () => {
    console.log(`el server esta escuchando en el puerto http://localhost:${PORT}`);
});
