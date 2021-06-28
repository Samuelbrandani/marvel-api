const { default: axios } = require("axios");
const { getAll,
    getById,
    getByComics,
    getByEvent,
    getBySerie,
    getByStory, } = require("../src/services");
jest.mock("axios");

const req = {
    params: {
        id: 1010903
    }
}

const res = {
    json: jest.fn()
}

// 1010903

describe("mock api", () => {
    test("consumindo api marvel", () => {
        let getMock = jest.fn(() => [{ test: 'test' }]);
        axios.get.mockImplementation(getMock);

        expect(getAll()).toEqual([{ test: 'test' }]);
        expect(getMock).toHaveBeenCalledWith('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=98b8d9604bdff26fadfb159e8aad2d76&hash=d7e335c35463a024e5dad732278e54ef');
    });

    test("consumindo api marvel  by id", () => {
        let getMock = jest.fn(() => [{ test: 'test' }]);
        axios.get.mockImplementation(getMock);

        expect(getById(req, res)).toEqual([{ test: 'test' }]);
        expect(getMock).toHaveBeenCalledWith('http://gateway.marvel.com/v1/public/characters/1010903?ts=1&apikey=98b8d9604bdff26fadfb159e8aad2d76&hash=d7e335c35463a024e5dad732278e54ef');
    });

    test("consumindo api marvel by comics", () => {
        let getMock = jest.fn(() => [{ test: 'test' }]);
        axios.get.mockImplementation(getMock);

        expect(getByComics(req, res)).toEqual([{ test: 'test' }]);
        expect(getMock).toHaveBeenCalledWith('http://gateway.marvel.com/v1/public/characters/1010903/comics?ts=1&apikey=98b8d9604bdff26fadfb159e8aad2d76&hash=d7e335c35463a024e5dad732278e54ef');
    });

    test("consumindo api marvel by events", () => {
        let getMock = jest.fn(() => [{ test: 'test' }]);
        axios.get.mockImplementation(getMock);

        expect(getByEvent(req, res)).toEqual([{ test: 'test' }]);
        expect(getMock).toHaveBeenCalledWith('http://gateway.marvel.com/v1/public/characters/1010903/events?ts=1&apikey=98b8d9604bdff26fadfb159e8aad2d76&hash=d7e335c35463a024e5dad732278e54ef');
    });

    test("consumindo api marvel by series", () => {
        let getMock = jest.fn(() => [{ test: 'test' }]);
        axios.get.mockImplementation(getMock);

        expect(getBySerie(req, res)).toEqual([{ test: 'test' }]);
        expect(getMock).toHaveBeenCalledWith('http://gateway.marvel.com/v1/public/characters/1010903/series?ts=1&apikey=98b8d9604bdff26fadfb159e8aad2d76&hash=d7e335c35463a024e5dad732278e54ef');
    });

    test("consumindo api marvel by stories", () => {
        let getMock = jest.fn(() => [{ test: 'test' }]);
        axios.get.mockImplementation(getMock);

        expect(getByStory(req, res)).toEqual([{ test: 'test' }]);
        expect(getMock).toHaveBeenCalledWith('http://gateway.marvel.com/v1/public/characters/1010903/stories?ts=1&apikey=98b8d9604bdff26fadfb159e8aad2d76&hash=d7e335c35463a024e5dad732278e54ef');
    });

});



