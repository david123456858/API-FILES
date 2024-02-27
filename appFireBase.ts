import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { config } from "dotenv"

config()

const firebaseConfig={
    apiKey: process.env.APY_KEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJEC_ID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENTID,
}
  
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)



