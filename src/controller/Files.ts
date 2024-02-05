import { Request,Response } from "express"
import {} from "mongoose"


import FilesModels from "../model/SchemaFiles"


export const saveFile = async (req:Request, res:Response)=>{
    try {
        console.log(req.file?.fieldname)
        const originalname = req.file?.originalname
        const size = req.file?.size
        const filsModels ={
            nameFiles: originalname,
            size:size,
            toDate: Date.now()
        }
        const create = await FilesModels.create(filsModels)
        res.status(200).json({data:"TODO OKAY"})
    } catch (error) {
        throw new Error    
    }
}