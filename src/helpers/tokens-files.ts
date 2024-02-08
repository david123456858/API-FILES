import jwt, { Secret } from 'jsonwebtoken'
import { config } from 'dotenv'


import { User } from '../model/user'
import { Console } from 'console'

config()

if(!process.env.PASSWORD_TOKEN){
    throw new Error
}
const processTokens = process.env.PASSWORD_TOKEN  as Secret
export const tokenSing= async (user:User)=>{

return jwt.sign({
    rol:user.rol,
    name:user.name
},processTokens,
{
    expiresIn:'12h'
})
}

export const verifyTokens = async (tokens:any)=>{
try {
    return jwt.verify(tokens, processTokens)
} catch (error) {
    console.log('wuepaje algo paso '+ error)
}
}