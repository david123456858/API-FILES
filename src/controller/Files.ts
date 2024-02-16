import { Request,Response } from "express"


import filesModels from "../model/modelsFiles"
import { User } from "../model/user"
import { tokenSing } from "../helpers/tokens-files"

export const saveFile = async (req:any, res:Response)=>{
    try {
        
            const originalname = req.file?.originalname
            const size = req.file?.size
            const filsModels ={
                nameFiles: originalname,
                size:size,
                toDate: Date.now()
            }
            const create = await filesModels.create(filsModels)
            const user:User = {
                rol:"admin",
                name:"papi"
            }
            const token = await tokenSing(user)
            res.status(200).json({data:token})
        //res.status(200).json({data:"OK success status" })
        
    } catch (error) {
        throw new Error    
    }
}
export const getAll = async (req:any,res:Response)=>{
    if(req.role === 'admin'){
        const all = await filesModels.find()
        res.json({info:all})
    }else{
        res.status(403).json({info:"No tienes autorización"})
    }
}