var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();
if (!process.env.PASSWORD_TOKEN) {
    throw new Error;
}
const processTokens = process.env.PASSWORD_TOKEN;
export const tokenSing = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return jwt.sign({
        rol: user.rol,
        name: user.name
    }, processTokens, {
        expiresIn: '12h'
    });
});
export const userRolFrom = (jwttoken) => {
    try {
        const { rol } = jwt.verify(jwttoken, processTokens);
        return rol;
    }
    catch (error) {
        console.log('wuepaje algo paso ' + error);
    }
};
