import { Request, Response } from 'express'
import {ref, uploadBytes} from 'firebase/storage'
import multer from 'multer'
import  fs from 'fs'

import { storage } from '../../appFireBase'
import path from 'path'



export const saveFileFirebase = async (req:any,res:Response)=>{
    try {
        if(req.info.rol === 'premium'){
            const filename = req.file?.filename
            const _path = path.join(process.cwd(),`/upload/${filename}`)
            const file = req.file 
            console.log(filename)
            if(!filename){
                res.status(404).json({data:"Error not found file"})
            }
            const storageRef = ref(storage,`files/${filename}` )
            uploadBytes(storageRef,file).then(shaphot =>{
                console.log(shaphot)
            })
            
            res.status(200).json({data:"Querido Admin su archivo fue subido"})
            fs.unlink(_path,(err =>{
                const verify = err ? err : "it's deleted the file"
                console.log(verify)
            }))
        }else{
            res.status(401).json({error:"Authorization Required"})
        }
            
    } catch (error) {
        throw new Error
    }
}