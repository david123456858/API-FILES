var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { userRolFrom } from "../../helpers/tokens-files";
export const checkRol = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ data: "not found token" });
    }
    const decode = token === null || token === void 0 ? void 0 : token.split(' ').pop();
    const verify = decode ? decode : undefined;
    const authorization = userRolFrom(verify);
    req.role = authorization ? authorization : undefined;
    console.log(req.role);
    return next();
});
