import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken'

import { userRolFrom } from "../../helpers/tokens-files";
import { reqRol } from "../../interface/reqRol";
import { JsonWebTokenError, JwtPayload } from "jsonwebtoken";

export const checkRol = async(req:any,res:Response,next : NextFunction)=>{
    
    const token = req.headers.authorization
    if(!token){
        res.json({data:"404 not found token"})
    }
    const decode = token?.split(' ').pop()
    
    let verify : string = ''
     if(decode){
         verify = decode
     }
    const authorization = userRolFrom(verify)
    
    if(authorization){
        req.role = authorization
    }
    return next()
    
}