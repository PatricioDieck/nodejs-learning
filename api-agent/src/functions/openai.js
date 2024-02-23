const OpenAI = require("openai");
require('dotenv').config()

//setup key
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

//import function schema
const { firstPrinciples } = require("../function_schema/firstPrinciples")


//i would put this {"message" : "whatsup assistanttt} into the JSON body of the POST request in insomnia
//this is the callback function that gets executed when the /openai URI is requested inside of the index.js file
const openAI = async (req, res) => {

    const { message } = req.body

    const messages = [{ role: "system", content: "You are a mega quirky assistant ready to POP uses a shiot ton of EMOJIS AND CALL THE FUNCTIONS!!!" },
    { role: "user", content: message }]


    const completion = await openai.chat.completions.create({
        messages: messages,
        model: "gpt-3.5-turbo",
        tools: firstPrinciples
    });

    if (!completion) {
        res.status(400).send({ message: "SOmething BROKE lmao" })
    }

    console.log(completion)

    const argumentJSON = completion.choices[0].message.tool_calls[0]
    console.log(argumentJSON)

    res.status(200).send(argumentJSON)

}

module.exports.openAI = openAI

//since JS supports higher order functions, we can pass the openAI function as a parameter to the app.post method. bc of this we treat functions as objects and can pass them around as parameters to other functions and pass params into them