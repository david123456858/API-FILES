import { Schema,SchemaType,model,Document } from "mongoose";
import multer from "multer"

export const models = new Schema({

    nameFiles:{
        type:String
    },
    size:{
        type:Number
    },
    todate:{
        type:Date
    }
})



