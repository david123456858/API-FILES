import { Request, Response } from 'express'
import {ref} from 'firebase/storage'
import multer from 'multer'

import { storage } from '../../appfirebase'



export const saveFileFirebase = (req:any,res:Response)=>{
    try {
        if(req.role === 'admin'){
            const file = multer().single('file')
            console.log(file)
            if(!file){
                res.status(404).json({data:"Error not found file"})
            }
            const uploadFirebase = ref(storage,`files/${file}`)
            console.log(uploadFirebase)
            res.status(200).json({data:"Querido Admin su archivo fue subido"})
        }
    } catch (error) {
        throw new Error
    }

    

}