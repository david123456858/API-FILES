import multer from "multer"
import path from "node:path"
import { Request,Response } from "express"
import {} from "mongoose"
import {Readable} from "stream"

import FilesModels from "../model/SchemaFiles"
import { callbackify } from "util"

// interface File {
//     fieldname: string,
//       originalname: string,
//       encoding: string,
//       mimetype: string,
//       destination: string,
//       filename: string,
//       path: string,
//       size: number,
//       stream:Readable,
//       buffer:Buffer
// }

// interface FileRequesr extends Request{
//     file:File
// }
export const saveFile = async (req:Request, res:Response)=>{
    try {
        //const {originalname} = req.file
        // const filsModels ={
        //  fileName:filename,
        //     size:size,S
        //      toDate:Date.now()
        //  }
        //  res.json({data:size})
        // const create = await FilesModels.create(filsModels)
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