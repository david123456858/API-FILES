import { Schema,SchemaType,model,Document } from "mongoose";
import multer from "multer"

export const models = new Schema({

    nameFiles:{
        type:String
    },
    size:{
        type:Number
    },
    toDate:{
        type:Date
    }
})

const FilesModels = model('Files',models)
export default FilesModels


