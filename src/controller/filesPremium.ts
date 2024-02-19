import { Request, Response } from 'express'
import {ref, uploadBytes} from 'firebase/storage'
import multer from 'multer'

import { storage } from '../../appFireBase'



export const saveFileFirebase = async (req:any,res:Response)=>{
    try {
        
            const filename = req.file?.filename
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
        
    } catch (error) {
        throw new Error
    }

    

}