const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

sequelize
    .authenticate()
    .then(() => {
        console.log("db connected")
    })
    .catch(err => {
        console.error("db not connected: ", err)
    })

app.get("/", (req,res) => {
    res.json({message: "welcome"})
})

const articleRouter = require('./routes/article')
app.use('/', articleRouter)

app.listen(3000, () => {
    console.log("running on http://localhost:3000")
})