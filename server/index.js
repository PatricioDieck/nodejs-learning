//https://www.youtube.com/watch?v=ENrzD9HAZK4&t=219s
//super gas fireship video on this 

const express = require('express')
const { readFile } = require('fs').promises

// this is going to create a server- a typical webapp. Server lives in the URL. When user makes a request to this URl, server responds with some HTML. 
//create instance of an express app

const app = express()

//when user enters a URL, this triggers a GET request 

//first arg is url, second is callback func. every request is an event, every event is handled w this func. 
//  two params- the request, and respons. They are users incoming data and your outgoing data
// you might want to see the headers or the body of the request to auythenticate the user or understand what they are trying to do n
//we turned this function into a promise by adding async. and turning the readFile into an await.  

app.get('/', async (req, res) => {

    res.send(await readFile('./home.html', 'utf8'))

})

app.listen(process.env.PORT || 8000, () => { console.log('App available on http://localhost:8000') })

//this is a server that listens for requests on port 8000.

//we can deploy this to the web.
//use google app engine- make an account, install the gcloud sdk, and run gcloud init
    //make an app.yaml file- specifiy the runtime, and the entrypoint.
    //gcloud app deploy
    //youre now a fullstack cloud architect