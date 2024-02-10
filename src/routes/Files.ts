import { Request, Response, Router } from "express";

import { saveFile,getAll} from "../controller/files";
import { upload, uploadFile } from "../middleware/multer/fileUpload";
import { checkRol } from "../middleware/jwt/filesJWS";
import { saveFileFirebase} from "../controller/filesPremium";

const routerBase:string ='/api/v1/files'

const routesFiles = Router()

routesFiles.post(`${routerBase}`,uploadFile,saveFile)
routesFiles.get(`${routerBase}`,checkRol, getAll)
routesFiles.post(`${routerBase}/vip`,checkRol,saveFileFirebase)

export default routesFiles
