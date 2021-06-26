const request = require('supertest')
const app = require('../index')

const myCharacter = {
    id: 1011334,
    idwrong: 0
}

describe("success", () => {
    it('Call listAll method should shows all characters', () => {
        const res = request(app)
            .get("/v1/public/characters")
        console.log(res)
        expect(res.status).toBe(200);
    })
    // it('Call listAll method should shows all characters', () => {
    //     const res = request(app)
    //         .get("/v1/public/characters/" + myCharacter.id)
    //     expect(res.status).toBe(200);
    // })
})

// describe("error", () => {
//     it('Call listAll method should shows all characters', () => {
//         const res = request(app)
//             .get("/v1/public/characters/" + myCharacter.idwrong)
//         expect(res.status).toBe(404);
//     })
// })