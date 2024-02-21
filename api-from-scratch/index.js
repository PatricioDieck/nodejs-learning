//i am using insomnia to test the server endpoints

const app = require('express')();

const PORT = 8080

app.listen(
    PORT,
    () => console.log(`Listening on http://localhost:${PORT}`)
)

//this is a get request to the tshirt URI an returns the second parameter
app.get('/tshirt')