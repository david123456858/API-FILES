import { connect } from "mongoose";

const DB:string = 'mongodb://127.0.0.1:27017/Files'

export const ConnecDb = async () =>{
    try {
        await connect(
            DB
        )
        console.log("todo correcto")
    } catch (error) {
        console.log(error)
    }


}