import { Request, Response } from "express"

import { tokenSing } from "../helpers/tokens-files";
import { User } from "../model/user";
import { token } from "morgan";


export const setTokens = async (res:Response,req:Request) => {
    try {
        const user: User = {
            rol: "premium",
            name: "Laura Altahona mi novia hermosa"
        }
        const token = await tokenSing(user)
        console.log(token)
        return
    } catch (error) {
        throw new Error
    }
}