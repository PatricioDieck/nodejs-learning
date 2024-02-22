const OpenAI = require("openai");
require('dotenv').config()


//i would put this {"message" : "whatsup assistanttt} into the JSON body of the POST request in insomnia
//this is the callback function that gets executed when the /openai URI is requested inside of the index.js file

const openAI = async (req, res) => {

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
}

module.exports.openAI = openAI

//since JS supports higher order functions, we can pass the openAI function as a parameter to the app.post method. bc of this we treat functions as objects and can pass them around as parameters to other functions and pass params into them