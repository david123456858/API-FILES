import { error } from "console"
import { NextFunction, Request, Response} from "express"
import multer from "multer"


const storage = multer.diskStorage({

    destination:function(req,file,cb){
     cb(null, '../upload')
    },
    filename:function(req,file,cb){
      cb(null,file.originalname+Date.now())
    }
 })

const upload = multer({storage:storage})

 export const uploadFile = (req:Request,res:Response,next:NextFunction)=>{
    upload.single("avatar")
    console.log(req.file?.filename)
    next
 }
