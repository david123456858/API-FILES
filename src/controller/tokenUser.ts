import { Request, Response } from "express"

import { tokenSing } from "../helpers/tokens-files";
import { User } from "../model/user";



export const setTokens = async (res:Response,req:Request) => {
    try {
        const user: User = {
            rol: "premium",
            name: "Laura Altahona mi novia hermosa"
        }
        const token = await tokenSing(user)
        console.log(token)
        res.status(200)
    } catch (error) {
        throw new Error
    }
}