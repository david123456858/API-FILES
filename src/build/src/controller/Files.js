var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import filesModels from "../model/modelsFiles";
import { tokenSing } from "../helpers/tokens-files";
export const saveFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const originalname = (_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname;
        const size = (_b = req.file) === null || _b === void 0 ? void 0 : _b.size;
        const filsModels = {
            nameFiles: originalname,
            size: size,
            toDate: Date.now()
        };
        const create = yield filesModels.create(filsModels);
        const user = {
            rol: "admin",
            name: "papi"
        };
        const token = yield tokenSing(user);
        res.status(200).json({ data: token });
        //res.status(200).json({data:"OK success status" })
    }
    catch (error) {
        throw new Error;
    }
});
export const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.role === 'admin') {
        const all = yield filesModels.find();
        res.json({ info: all });
    }
    else {
        res.status(403).json({ info: "No tienes autorización" });
    }
});
