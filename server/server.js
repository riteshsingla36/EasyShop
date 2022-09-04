const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

dotenv.config({path: "./.env"})
mongoose.connect(process.env.DB_URI).then(() => console.log("moongoose connected successfully")).catch(error => console.log(error.meaasge))
app.use(express.json())
app.use(cors())


app.get("/home", async (req, res) => {
    res.send('hello')
})

app.listen(8000, console.log("Your app is running in 8000 port"))

