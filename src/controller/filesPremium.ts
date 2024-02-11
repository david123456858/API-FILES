import { Request, Response } from 'express'
import {ref} from 'firebase/storage'
import multer from 'multer'

import { storage } from '../../appFireBase'



export const saveFileFirebase = async (req:any,res:Response)=>{
    try {
        
            const filename = req.file?.filename
            console.log(filename)
            if(!filename){
                res.status(404).json({data:"Error not found file"})
            }
            const uploadFirebase = await ref(storage,`../../upload/${filename}`)
            console.log(uploadFirebase)
            res.status(200).json({data:"Querido Admin su archivo fue subido"})
        
    } catch (error) {
        throw new Error
    }

    

}