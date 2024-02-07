import { model,Schema } from "mongoose";

export const models= new Schema({
    rol:{
        type:String
    },
    username:{
        type:String
    },
    toDate:{
        type:Date
    }
})

export class User {
    rol:string
    name:string
    
    constructor(rol:string,name:string){
        this.name = name
        this.rol = rol
    }

}