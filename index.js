const app = require("./server");

const porta = process.env.PORT;
console.log(porta)

app.listen(porta || 8081, () => {
    console.log('Server started on port 8081')
})