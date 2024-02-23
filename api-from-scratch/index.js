//insomnia to test the server endpoints
//create a server app
const express = require('express')
const app = express()
const PORT = 8080
const {openAI} = require('./src/functions/openai')
 
//this is middleware that allows us to parse the request body from JSON
app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Listening on http://localhost:${PORT}`)
)

//this is a get request to the /tshirt URI and executes the second parameter
//second parameter is usually a callback function
//we Hhandle a request to the /tshirt URI by passing a callback function to the second parameter of app.get. when this route/url is requested, the callback function is executed
app.get('/amongus', (res) => {
    res.status(200).send({
        amogus: 'sus 👹',
        imposter: 'red',
        crewmate: 'green',
        tasks: 'medbay scan',
        cholitoLindo: 'cholitoLindo',
        perro: '🐶 chulo'
    })
})

//dynamic url allows us to handle large amouns of specific requests from a single url 
// since the HTTP verb is post, then this means client is trying to create a new object 
//request params object avails us of the dynamic :id value in the URL
app.post('/amongus/:id', (req, res) => {

    const { id } = req.params
    const { logo } = req.body

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!!!' })
    }

    //save record of these things to the DB
    res.status(200).send({ tshirt: `👕 with your ${logo} logo and your ${id} id!!!` })
})


//this is a post request to the /openai URI and executes the second parameter (a callback function in this case)
app.post('/openai', openAI)

