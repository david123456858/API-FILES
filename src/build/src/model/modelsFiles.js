import { Schema, model } from "mongoose";
export const models = new Schema({
    nameFiles: {
        type: String
    },
    size: {
        type: Number
    },
    toDate: {
        type: Date
    }
});
const filesModels = model('Files', models);
export default filesModels;
