"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.saveFile = void 0;
const modelsFiles_1 = __importDefault(require("../model/modelsFiles"));
const tokens_files_1 = require("../helpers/tokens-files");
const saveFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const originalname = (_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname;
        const size = (_b = req.file) === null || _b === void 0 ? void 0 : _b.size;
        const filsModels = {
            nameFiles: originalname,
            size: size,
            toDate: Date.now()
        };
        const create = yield modelsFiles_1.default.create(filsModels);
        const user = {
            rol: "admin",
            name: "papi"
        };
        const token = yield (0, tokens_files_1.tokenSing)(user);
        res.status(200).json({ data: token });
        //res.status(200).json({data:"OK success status" })
    }
    catch (error) {
        throw new Error;
    }
});
exports.saveFile = saveFile;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.role === 'admin') {
        const all = yield modelsFiles_1.default.find();
        res.json({ info: all });
    }
    else {
        res.status(403).json({ info: "No tienes autorización" });
    }
});
exports.getAll = getAll;
