"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
//const __dirname = fileURLToPath(import.meta.url) 
//const route = path.join(__dirname,'../../../upload/')
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + Date.now());
    }
});
exports.upload = (0, multer_1.default)({ storage: storage }).single('file'); // it can be used in this ways
const uploadFile = (req, res, next) => {
    (0, exports.upload)(req, res, function (err) {
        if (err instanceof multer_1.default.MulterError) {
            res.status(500).json({ error: "Hubo un problema en la subida del archivo" });
        }
        else if (err) {
            throw err;
        }
        console.log(req.file);
        //console.log(__dirname)
        //console.log(route)
        return next();
    });
};
exports.uploadFile = uploadFile;
