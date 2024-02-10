import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken'

import { userRolFrom } from "../../helpers/tokens-files";
import { reqRol } from "../../interface/reqRol";
import { JsonWebTokenError, JwtPayload } from "jsonwebtoken";

export const checkRol = async(req:any,res:Response,next : NextFunction)=>{
    
    const token = req.headers.authorization
    if(!token){
        res.status(401).json({data:"not found token"})
    }
    const decode = token?.split(' ').pop()
    const verify = decode ? decode : undefined
    const authorization = userRolFrom(verify)
    req.role = authorization ? authorization : undefined 
    console.log(req.role)
    return next()
    
}