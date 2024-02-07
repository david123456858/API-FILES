import { Request,Response } from "express"
import {} from "mongoose"
import {config} from 'dotenv'

import filesModels from "../model/modelsFiles"

config()
export const saveFile = async (req:Request, res:Response)=>{
    try {
        const originalname = req.file?.originalname
        const size = req.file?.size
        const filsModels ={
            nameFiles: originalname,
            size:size,
            toDate: Date.now()
        }
        const create = await filesModels.create(filsModels)
        console.log(create)
        console.log(process.env.PASSWORD_TOKEN)
        res.status(200).json({data:"TODO OKAY"})
    } catch (error) {
        throw new Error    
    }
}