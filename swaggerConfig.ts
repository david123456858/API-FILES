import { SwaggerOptions } from "swagger-ui-express";
import path from "path";

//TODO: El __dirname es utilizado para obtener de manera completa la ruta que quieras.
//TODO: El process.cwd() es otra funcion que se acompla mas al commonjs y hace lo mismo
const swaggerOptions : SwaggerOptions ={
    definition:{
        openapi:"3.0.3",
        info:{
            title:"DOCS APIFILES",
            version:'1.0.0',
            decription:'API APIFLES build in nodejs with TypeScript'
        },
        
    },
    apis:[`${path.join(process.cwd(), '/src/routes/*.ts')}`]
}
export default swaggerOptions