//i am using insomnia to test the server endpoints

const app = require('express')();

const PORT = 8080

app.listen(
    PORT,
    () => console.log(`Listening on http://localhost:${PORT}`)
)

//this is a get request to the /tshirt URI and executes the second parameter
//second parameter is usually a callback function
//we Hhandle a request to the /tshirt URI by passing a callback function to the second parameter of app.get. when this route/url is requested, the callback function is executed
app.get('/amongus', (req, res) => {
    res.status(200).send({
        amogus: 'sus 👹',
        imposter: 'red',
        crewmate: 'green',
        tasks: 'medbay scan',
        cholitoLindo: 'cholitoLindo',
        perro: '🐶 chulo'
    })
})