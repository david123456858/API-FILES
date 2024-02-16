import { NextFunction, Request, Response} from "express"
import multer, {MulterError}  from "multer"
import { fileURLToPath } from "url"
import path from "path"
//const __dirname = fileURLToPath(import.meta.url) 
//const route = path.join(__dirname,'../../../upload/')

const storage = multer.diskStorage({

    destination:function(req,file,cb){
     cb(null, 'upload')
    },
    filename:function(req,file,cb){
      cb(null,file.originalname+Date.now())
    }
 })

 export const upload = multer({storage:storage}).single('file') // it can be used in this ways

 export const uploadFile = (req:Request,res:Response,next:NextFunction)=>{
  upload(req,res,function (err){
    if(err instanceof multer.MulterError){
      res.status(500).json({error:"Hubo un problema en la subida del archivo"})
    }else if (err){
      throw err
    }
     console.log(req.file)
     //console.log(__dirname)
     //console.log(route)
     return next()
  })
  }
  

