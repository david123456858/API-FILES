import express,{Request,Response} from "express";
import { Server, createServer } from "http";
import morgan from "morgan"

import { ConnecDb } from "./src/database/db";
import routesFiles from "./src/routes/Files"

const app = express();

app.use(express.json()); //middlware para que el cuerpo de la req sea un json
app.use(morgan("dev"))
const PORT = process.env.PORT ?? 3000;


ConnecDb()

app.get("/",(req:Request,res:Response)=>{
  res.send("hola")
})

app.use(routesFiles)


app.listen(PORT, () => {
  console.log(
    `el server esta escuchando en el puerto http://localhost:${PORT}`,
  );
});


