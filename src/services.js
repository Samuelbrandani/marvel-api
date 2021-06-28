
const baseUrl = 'http://gateway.marvel.com/v1/public/characters';
const apiKey = '98b8d9604bdff26fadfb159e8aad2d76';
const hash = 'd7e335c35463a024e5dad732278e54ef'
const ts = 1
const axios = require('axios');

function getAll(req, res) {
    var url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    return axios.get(url)

}

function getById(req, res) {
    var id = req.params.id;
    var url = `${baseUrl}/${id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    return axios.get(url)

}

function getByComics(req, res) {
    var id = req.params.id;
    var url = `${baseUrl}/${id}/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    return axios.get(url)

}

function getByEvent(req, res) {
    var id = req.params.id;
    var url = `${baseUrl}/${id}/events?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    return axios.get(url)

}

function getBySerie(req, res) {
    var id = req.params.id;
    var url = `${baseUrl}/${id}/series?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    return axios.get(url)

}

function getByStory(req, res) {
    var id = req.params.id;
    var url = `${baseUrl}/${id}/stories?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    return axios.get(url)

}



module.exports = {
    getAll,
    getById,
    getByComics,
    getByEvent,
    getBySerie,
    getByStory,
}
