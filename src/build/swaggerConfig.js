//const __dirname = fileURLToPath(import.meta.url) 
//TODO: El __dirname es utilizado para obtener de manera completa la ruta que quieras.
const swaggerOptions = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "DOCS APIFILES",
            version: '1.0.0',
            decription: 'API APIFLES build in nodejs with TypeScript'
        },
    },
    apis: [ /*`${path.join(__dirname, './src/routes/files.ts')}`*/]
};
export default swaggerOptions;
