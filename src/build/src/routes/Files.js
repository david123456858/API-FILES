import { Router } from "express";
import { saveFile, getAll } from "../controller/files";
import { uploadFile } from "../middleware/multer/fileUpload";
import { checkRol } from "../middleware/jwt/filesJWS";
import { saveFileFirebase } from "../controller/filesPremium";
const routerBase = '/api/v1/files';
const routesFiles = Router();
routesFiles.post(`${routerBase}`, uploadFile, saveFile);
routesFiles.get(`${routerBase}`, checkRol, getAll);
/**
 * @swagger
 * /api/v1/files:
 *   get:
 *    tags:
 *      -Files
 *    summry: Get user */
routesFiles.post(`${routerBase}/vip`, checkRol, uploadFile, saveFileFirebase);
export default routesFiles;
