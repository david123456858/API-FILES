import jwt from 'jsonwebtoken'
import { config } from 'dotenv'


import { User } from '../model/user'
import { Console } from 'console'

config()

if(!process.env.PASSWORD_TOKEN){
    throw new Error
}
const processTokens = process.env.PASSWORD_TOKEN
export const tokenSing= async (user:User)=>{

return jwt.sign({
    rol:user.rol
},processTokens,
{
    expiresIn:'12h'
})
}

export const VerifyTokens= (tokens:any)=>{
try {
    return jwt.verify(tokens, processTokens)
} catch (error) {
    console.log('wuepaje algo paso '+ error)
}
}