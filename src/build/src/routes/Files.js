"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Files_1 = require("../controller/Files");
const routerBase = '/api/v1/files';
const routesFiles = (0, express_1.Router)();
routesFiles.post(`${routerBase}`, Files_1.uploadFile);
routesFiles.get(`${routerBase}/example`);
routesFiles.get(`${routerBase}`, (req, res) => {
    res.send("papi funciona esta caga");
});
exports.default = routesFiles;
