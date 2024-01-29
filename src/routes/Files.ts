import { Request, Response, Router } from "express";

import { } from "../controller/Files";
import { uploadFile } from "../middleware/fileUpload";

const routerBase:string ='/api/v1/files'

const routesFiles = Router()

routesFiles.post(`${routerBase}`,uploadFile )

routesFiles.get(`${routerBase}`,(req:Request,res:Response)=>{
    res.send("papi funciona esta caga")
})
export default routesFiles


