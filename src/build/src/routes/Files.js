"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fileUpload_1 = require("../middleware/fileUpload");
const routerBase = '/api/v1/files';
const routesFiles = (0, express_1.Router)();
routesFiles.post(`${routerBase}`, fileUpload_1.uploadFile);
routesFiles.get(`${routerBase}`, (req, res) => {
    res.send("papi funciona esta caga");
});
exports.default = routesFiles;
