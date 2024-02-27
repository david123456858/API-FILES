"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const firebaseConfig = {
    apiKey: process.env.APY_KEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJEC_ID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENTID,
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.storage = (0, storage_1.getStorage)(app);
