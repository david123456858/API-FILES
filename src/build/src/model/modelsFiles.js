"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
const mongoose_1 = require("mongoose");
exports.models = new mongoose_1.Schema({
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
const filesModels = (0, mongoose_1.model)('Files', exports.models);
exports.default = filesModels;
