import { Request, Response, Router } from "express";

import { saveFile,getAll} from "../controller/files";
import { upload, uploadFile } from "../middleware/multer/fileUpload";
import { checkRol } from "../middleware/jwt/filesJWS";

const routerBase:string ='/api/v1/files'

const routesFiles = Router()

routesFiles.post(`${routerBase}`,uploadFile,saveFile)
routesFiles.get(`${routerBase}`,checkRol, getAll)
export default routesFiles
