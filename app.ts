import express,{Request,Response} from "express";
import { Server, createServer } from "http";
import morgan from "morgan"
import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'

import { ConnecDb } from "./src/database/db";
import routesFiles from "./src/routes/files"

const firebaseConfig={
  apiKey: "AIzaSyBoRfpIg0h32vy7tSF9AD71uJfGSwlo3uY",
  authDomain: "direct-builder-412720.firebaseapp.com",
  projectId: "direct-builder-412720",
  storageBucket: "direct-builder-412720.appspot.com",
  messagingSenderId: "538411677172",
  appId: "1:538411677172:web:c1406ad92ad725059d35a1",
  measurementId: "G-5M46GP65PE",
}
const appfire = initializeApp(firebaseConfig)
const app = express();

app.use(express.json()) //middlware para que el cuerpo de la req sea un json
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT ?? 3000;


ConnecDb()

app.get("/",(req:Request,res:Response)=>{
  res.send("Bienvenido a la APIFILE")
})

app.use(routesFiles)


app.listen(PORT, () => {
  console.log(
    `el server esta escuchando en el puerto http://localhost:${PORT}`,
  );
});


