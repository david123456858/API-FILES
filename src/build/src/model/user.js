"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.models = void 0;
const mongoose_1 = require("mongoose");
exports.models = new mongoose_1.Schema({
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
class User {
    constructor(rol, name) {
        this.name = name;
        this.rol = rol;
    }
}
exports.User = User;
