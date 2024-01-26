import multer from "multer"
import { Request,Response } from "express"

const upload = multer({dest:"/upload"})

export const storage = multer.diskStorage({

    filename:function(req,file,cb){
        cb(null,'/upload')
        
    }
})
export const ejemplo = async (res:Response,req:Request)=>{
try {
    res.send("solasdasd")
} catch (error) {
     
}
}
export const uploadFile = async (res:Response, req:Request)=>{
    try {
        upload.single('name')
        console.log(req.file?.filename,req.body)
        console.log("entrando")
    } catch (error) {
        
    }
}