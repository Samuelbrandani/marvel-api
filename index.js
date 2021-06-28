const express = require('express')
const app = express()
const service = require('./src/services')
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('./documentation.json')

const router = express.Router()

router.get('/v1/public/characters', service.getAll)
router.get('/v1/public/characters/:id', service.getById)
router.get('/v1/public/characters/:id/comics', service.getByComics)
router.get('/v1/public/characters/:id/events', service.getByEvent)
router.get('/v1/public/characters/:id/series', service.getBySerie)
router.get('/v1/public/characters/:id/stories', service.getByStory)

app.use(express.json());
app.use('/', router)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));

const porta = process.env.PORT;

app.listen(porta || 8081, () => {
    console.log('Server starteds on port 8081')
})

module.exports = app;