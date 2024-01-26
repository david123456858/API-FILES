import { Request, Response, Router } from "express";

import { uploadFile,ejemplo} from "../controller/Files";

const routerBase:string ='/api/v1/files'

const routesFiles = Router()

routesFiles.post(`${routerBase}`,uploadFile)

routesFiles.get(`${routerBase}/example`,ejemplo)

routesFiles.get(`${routerBase}`,(req:Request,res:Response)=>{
    res.send("papi funciona esta caga")
})
export default routesFiles


