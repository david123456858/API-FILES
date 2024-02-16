import { Schema } from "mongoose";
export const models = new Schema({
    rol: {
        type: String
    },
    username: {
        type: String
    },
    toDate: {
        type: Date
    }
});
export class User {
    constructor(rol, name) {
        this.name = name;
        this.rol = rol;
    }
}
