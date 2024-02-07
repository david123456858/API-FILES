import { Request, Response, Router } from "express";

import { saveFile} from "../controller/files";
import { upload, uploadFile } from "../middleware/multer/fileUpload";

const routerBase:string ='/api/v1/files'

const routesFiles = Router()

routesFiles.post(`${routerBase}`,uploadFile,saveFile)

export default routesFiles
