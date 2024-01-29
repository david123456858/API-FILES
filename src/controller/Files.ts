import multer from "multer"
import path from "node:path"
import { Request,Response } from "express"
import {} from "mongoose"

import {models} from "../model/SchemaFiles"
import { callbackify } from "util"

const route = path.join()

export const saveFile = async (res:Response, req:Request)=>{
    try {
    
        
        console.log(req.file,req.body)
        console.log("entrando")
    } catch (error) {
        
    }
}