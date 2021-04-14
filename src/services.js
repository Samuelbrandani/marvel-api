
const baseUrl = 'http://gateway.marvel.com/v1/public/characters';
const apiKey = '98b8d9604bdff26fadfb159e8aad2d76';
const hash = 'd7e335c35463a024e5dad732278e54ef'
const ts = 1
const axios = require('axios');

const getAll = (req, res) => {
    var url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    axios.get(url)
        .then(function (response) {
            console.log(response);
            res.status(200).send(response.data)
        })
        .catch(function (error) {
            res.status(404).send({
                message: error
            })
        })
}

const getById = (req, res) => {
    var id = req.params.id;
    var url = `${baseUrl}/${id}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
    axios.get(url)
        .then(function (response) {
            console.log(response);
            res.status(200).send(response.data)
        })
        .catch(function (error) {
            res.status(404).send({
                message: error
            })
        })

}

const getByComics = (req, res) => {
    var id = req.params.id;
    var url = `${baseUrl}/${id}/comics?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
    axios.get(url)
        .then(function (response) {
            console.log(response);
            res.status(200).send(response.data)
        })
        .catch(function (error) {
            res.status(404).send({
                message: error
            })
        })
}

const getByEvent = (req, res) => {
    var id = req.params.id;
    var url = `${baseUrl}/${id}/events?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
    axios.get(url)
        .then(function (response) {
            console.log(response);
            res.status(200).send(response.data)
        })
        .catch(function (error) {
            res.status(404).send({
                message: error
            })
        })
}

const getBySerie = (req, res) => {
    var id = req.params.id;
    var url = `${baseUrl}/${id}/series?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
    axios.get(url)
        .then(function (response) {
            console.log(response);
            res.status(200).send(response.data)
        })
        .catch(function (error) {
            res.status(404).send({
                message: error
            })
        })
}

const getByStory = (req, res) => {
    var id = req.params.id;
    var url = `${baseUrl}/${id}/stories?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
    axios.get(url)
        .then(function (response) {
            console.log(response);
            res.status(200).send(response.data)
        })
        .catch(function (error) {
            res.status(404).send({
                message: error
            })
        })
}



module.exports = {
    getAll,
    getById,
    getByComics,
    getByEvent,
    getBySerie,
    getByStory,
}
