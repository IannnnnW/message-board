const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

const indexRouter = require("./routes/indexRoute")
const newMessagesRouter = require("./routes/newRoute")

//Application Level Routes
app.use("/", indexRouter)
app.use("/new", newMessagesRouter)

app.use((error, req, res, next) => {
    console.log(error)
    res.status(500).send(error.message)
})


const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Listening for requests on port: ${PORT}`))