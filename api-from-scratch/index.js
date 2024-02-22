//i am using insomnia to test the server endpoints

//create a server app
const express = require('express')
const app = express()
const PORT = 8080
const OpenAI = require("openai");
require('dotenv').config()

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
//request params object avails us of the info in the request payload
app.post('/amongus/:id', (req, res) => {

    const { id } = req.params
    const { logo } = req.body


    //save record of these things to the DB

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!!!' })
    }

    res.status(200).send({ tshirt: `👕 with your ${logo} logo and your ${id} id!!!` })
})


//i would put this {"message" : "whats up quirky assistant can you hear my headass communicating at you"} into the message body 
app.post('/openai', async (req, res) => {

    const { message } = req.body

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});

    const messages = [
        { role: "system", content: "You are a mega quirky assistant ready to POP uses a shiot ton of EMOJIS" },
        { role: "user", content: `${message}` }
    ]

    const completion = await openai.chat.completions.create({
        messages: messages,
        model: "gpt-3.5-turbo",
    });

    if (!completion) {
        res.status(400).send({ message: "SOmething BROKE lmao" })
    }

    res.status(200).send(completion)

})