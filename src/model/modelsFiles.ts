import { Schema, SchemaType, model, Document } from "mongoose";


export const models = new Schema({

    nameFiles: {
        type: String
    },
    size: {
        type: Number
    },
    userName: {
        type: String
    },
    rol: {
        type: String
    },
    toDate: {
        type: Date
    }
})


const filesModels = model('files', models)
export default filesModels