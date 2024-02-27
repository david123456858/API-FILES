import { Request } from "express"
export interface reqRol extends Request {
    rol: string | undefined
}