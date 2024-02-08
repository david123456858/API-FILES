import { NextFunction, Request, Response } from "express";

import { verifyTokens } from "../../helpers/tokens-files";
import tokens from "../../interface/tokens";
import { JwtPayload } from "jsonwebtoken";

export const checkRol = async(req:Request,res:Response,next : NextFunction)=>{
    
    const token = req.headers.authorization
    if(!token){
        res.json({data:"404 not found token"})
    }
    const decode = token?.split(' ').pop()
    let verify : string = ''
    // if(decode){
    //     verify = decode
    // }
    const authorization = await verifyTokens(decode) 
    
    console.log(authorization)

    res.json({data:decode})
    
    return next()
    
}