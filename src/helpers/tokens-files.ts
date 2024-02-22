import * as jwt from 'jsonwebtoken'
import { config } from 'dotenv'


import { User } from '../model/user'
import { Console } from 'console'

config()

declare module 'jsonwebtoken' {
    export interface myJwtRol extends jwt.JwtPayload {
        rol: string
    }
}

if (!process.env.PASSWORD_TOKEN) {
    throw new Error
}
const processTokens = process.env.PASSWORD_TOKEN
export const tokenSing = async (user: User) => {

    return jwt.sign({
        rol: user.rol,
        name: user.name
    }, processTokens,
        {
            expiresIn: '12h'
        })
}

export const userRolFrom = (jwttoken: string): User | undefined => {
    try {
        const { rol, name } = <jwt.myJwtRol>jwt.verify(jwttoken, processTokens)
        const user: User = {
            rol: rol,
            name: name
        }
        return user
    } catch (error) {
        console.log('Hubo un problema:  ' + error)
    }
}