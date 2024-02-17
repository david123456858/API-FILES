"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const express_1 = require("express");
const swaggerConfig_1 = __importDefault(require("../../swaggerConfig"));
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerConfig_1.default);
const routerSwagger = (0, express_1.Router)();
routerSwagger.use('/docs', swagger_ui_express_1.default.serve);
routerSwagger.get('/docs', swagger_ui_express_1.default.setup(swaggerSpec));
exports.default = routerSwagger;
