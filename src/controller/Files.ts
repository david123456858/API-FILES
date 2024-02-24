import { Request, Response } from "express"

import filesModels from "../model/modelsFiles"
import { User } from "../model/user"
import { tokenSing } from "../helpers/tokens-files"

//TODO: Para realizar peticiones al save recuerda el token 
export const saveFile = async (req: any, res: Response) => {
    try {
        let state: number = 0

        await filesModels.estimatedDocumentCount({ userName: { $gte: `${req.info.name}` } })
            .then(count => {
                console.log(count)
                state = count
            })
        if (state >= 3) {
            res.status(401).json({ data: "no tienes ya autorización compra tacaño" })
        } else {
            const originalname = req.file?.originalname
            const size = req.file?.size
            const filsModels = {
                nameFiles: originalname,
                size: size,
                userName: req.info?.name,
                rol: req.info?.rol,
                toDate: Date.now()
            }
            console.log(filesModels)
            const create = await filesModels.create(filsModels)
            const user: User = {
                rol: "premium",
                name: "juan"
            }
            const token = await tokenSing(user)
            res.status(200).json({ data: token })
            //res.status(200).json({data:"OK success status" })

        }


    } catch (error) {
        throw new Error
    }
}

export const getAll = async (req: any, res: Response) => {
    try {
        const role = req.info.rol
        if (role === 'premium') {
            const all = await filesModels.find()
            res.json({ info: all })
            let countUser: any
            const example2 = await filesModels.estimatedDocumentCount({ userName: { $gte: `${req.info.name}` } })
                .then(count => {
                    console.log(count)
                    countUser = count
                })
            console.log("esto es " + countUser)

        } else {
            res.status(403).json({ info: "No tienes autorización" })
        }
    } catch (error) {
        throw new Error
    }
}


