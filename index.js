const express = require('express')
const app = express()
const service = require('./src/services')

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


app.use('/', router)

const porta = process.env.PORT;
console.log(porta)

app.listen(porta || 8081, () => {
    console.log('Server started on port 8081')
})