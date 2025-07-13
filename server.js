const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const methodOverride = require('method-override')

const app = express()

// Database Configurations
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
  console.log(`connected to the Database: ${mongoose.connection.name}`)
})

app.use(methodOverride("_method"))

// Parse the form body data
app.use(express.urlencoded({ extended: true }))

app.get("/", async (req, res) => {
  res.render("index.ejs")
})

// Require Router
const fruitsRouter = require("./router/fruits")

// use Router
app.use("/fruits", fruitsRouter)

app.listen(3000, () => {
  console.log("Listening on port 3000")
})
