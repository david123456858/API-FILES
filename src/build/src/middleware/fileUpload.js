"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../upload');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + Date.now());
    }
});
const upload = (0, multer_1.default)({ storage: storage });
const uploadFile = (req, res, next) => {
    
};
exports.uploadFile = uploadFile;
