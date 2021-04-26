const express = require('express')
const app = express()
const service = require('./src/services')
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('./documentation.json');

const router = express.Router()
router.get('/', (req, res) => {
    res.send('rodando')
})
router.get('/v1/public/characters', service.getAll)
router.get('/v1/public/characters/:id', service.getById)
router.get('/v1/public/characters/:id/comics', service.getByComics)
router.get('/v1/public/characters/:id/events', service.getByEvent)
router.get('/v1/public/characters/:id/series', service.getBySerie)
router.get('/v1/public/characters/:id/stories', service.getByStory)

app.use(express.json());
app.use('/', router)

//Documentação server SwaggerHub: https://app.swaggerhub.com/apis/BlazeF35/API_marvel/1.0.0
//const swaggerOptions = {
 //   swaggerDefinition: {
 //       info: {
  //          title: 'MarvelAPI',
   //         description: 'API Marvel',
   //         version: '1.0.0',
   //         contact: {
    //            name: 'Samuel Alves Brandani e Gabriel Ricieri Martines Ribeiro',
  //              description: '',
///email: ''
 //           },
 //           servers: ['http://localhost:8081']
 //       }
  //  },
  //  apis: ['index']
//};

//const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));
// Routes
/**
 * /Characters:
 *  get:
 *      summary: API disponibilizada pela Marvel
 *      description: Lista todos os nomes dos persoangens, revistas em quadrinho e sua data de lançamento
 *      consumes: 
 *      - application/json
 *      produces:
 *      - applicatio/json
 *      parameters:
 *      - in: body
 *        schema:
 *        $ref: '#/definition/Characters'
 *      responses:
 *        201: 
 *          description: Requisição Realizada
 *        400:
 *          description: Erro de Requisição
 *        500:
 *          description: Erro interno servidor
 *      
 *        definition:
 *          Characters:
 *              type: string
 *               required:
 *                  - comics
 *                  - events
 *                  - series
 *                  - stories
 *          properties:
 *              id:
 *                  type: string
 *                  format: uuid
 *                  example: 1011334
 *              comics:
 *                  type: string
 *                  example: Iron Man
 *              events:
 *                  type: string
 *                  format: date
 *                  example: 1963-03-03
 *              series:
 *                  type: string
 *                  example: Avengers Assemble
 *              stories:
 *                  type: string 
 *                  example: Invincible Iron Man
 *              manufacturer:
 *                  $ref: '#/definitions/Manufacturer'
 *         Manufacturer: 
 *              required:
 *              - Marvel ApiKey
 *              properties:
 *                  name:
 *                      type: string
 *                      example: Marvel
 *                  homePage:
 *                      type: string
 *                      format: url
 *                      example: https://developer.marvel.com/
 * 
 * host: http://localhost:8081
 */

const porta = process.env.PORT;
console.log(porta)

app.listen(porta || 8081, () => {
    console.log('Server started on port 8081')
})