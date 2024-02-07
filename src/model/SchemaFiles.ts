import { Schema,SchemaType,model,Document } from "mongoose";


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


