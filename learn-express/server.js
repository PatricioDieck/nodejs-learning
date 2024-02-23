const express = require('express')

const app = express()


app.get('/', (req, res) => {
    console.log('here')
    //composable status messages
    //we use .json to turn th JS object into a JSON string
    // res.status(200).json({message: 'HI babeyyyy'})

    // res.download('server.js')
    res.render('index')
})

app.listen(8000)