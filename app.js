const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send("This is for checking our server")
})
app.listen(3000, () => console.log("Our server is running at Port: 3000"))