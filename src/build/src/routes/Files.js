"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const files_1 = require("../controller/files");
const fileUpload_1 = require("../middleware/multer/fileUpload");
const filesJWS_1 = require("../middleware/jwt/filesJWS");
const filesPremium_1 = require("../controller/filesPremium");
const routerBase = '/api/v1/files';
const routesFiles = (0, express_1.Router)();
routesFiles.post(`${routerBase}`, fileUpload_1.uploadFile, files_1.saveFile);
routesFiles.get(`${routerBase}`, filesJWS_1.checkRol, files_1.getAll);
/**
 * @swagger
 * /api/v1/files:
 *   get:
 *    tags:
 *      -Files
 *    summry: Get user */
routesFiles.post(`${routerBase}/vip`, filesJWS_1.checkRol, fileUpload_1.uploadFile, filesPremium_1.saveFileFirebase);
exports.default = routesFiles;
