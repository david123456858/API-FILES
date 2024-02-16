import swaggerJSDoc from "swagger-jsdoc";
import { setup,SwaggerOptions,serveWithOptions} from "swagger-ui-express";
import swaggerUi from 'swagger-ui-express'
import { Router } from "express";

import swaggerOptions from "../../swaggerConfig";

const swaggerSpec = swaggerJSDoc(swaggerOptions)

const routerSwagger = Router()


 routerSwagger.use('/docs',swaggerUi.serve)
 routerSwagger.get('/docs',swaggerUi.setup(swaggerSpec))

export default routerSwagger