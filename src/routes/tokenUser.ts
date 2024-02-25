import { Router } from "express";

import { setTokens } from "../controller/tokenUser";
import { routerBase } from "./files";


const routeToken = Router()

routeToken.get(`${routerBase}/token`,setTokens)

export default routeToken
