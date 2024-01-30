import { error } from "console"
import { NextFunction, Request, Response} from "express"
import multer, {MulterError}  from "multer"


const storage = multer.diskStorage({

    destination:function(req,file,cb){
     cb(null, 'upload')
    },
    filename:function(req,file,cb){
      cb(null,file.originalname+Date.now())
    }
 })

 export const upload = multer({storage:storage}).single('file')

 export const uploadFile = (req:Request,res:Response,next:NextFunction)=>{
  upload(req,res,function (err){
    if(err instanceof multer.MulterError){
      res.status(500).json({error:"Hubo un problema en la subida del archivo"})
    }else if (err){
      throw err
    }
    res.status(200).json({data:"TODO OKAY"})
    next
  })
  }
  

