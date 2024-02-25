import { Request, Response, Router } from "express";


import { saveFile, getAll } from "../controller/files";
import { upload, uploadFile } from "../middleware/multer/fileUpload";
import { checkRol } from "../middleware/jwt/filesJWS";
import { saveFileFirebase } from "../controller/filesPremium";

export const routerBase: string = '/api/v1/files'

const routesFiles = Router()

routesFiles.post(`${routerBase}`,checkRol, uploadFile, saveFile)

routesFiles.get(`${routerBase}`, checkRol, getAll)
/** 
 * @swagger
 * /api/v1/files:
 *   get:
 *     tags:
 *       - files
 *     summary: get all
 *     description: Endpoint to get alls files
 *     requestBody:
 *       
 */
routesFiles.post(`${routerBase}/vip`, checkRol, uploadFile, saveFileFirebase)

export default routesFiles
