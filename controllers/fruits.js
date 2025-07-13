const { trusted } = require("mongoose")
const Fruit = require("../models/fruits")

// API's / Main Functionality
exports.fruits_create_get = async (req, res) => {
  res.render("fruits/new.ejs")
}

exports.fruits_create_post = async (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true
  } else {
    req.body.isReadyToEat = false
  }
  await Fruit.create(req.body)
  res.redirect("/fruits")
}

exports.fruits_index_get = async (req, res) => {
  const fruits = await Fruit.find()
  res.render("fruits/index.ejs", { fruits })
}

exports.fruite_show_get = async (req, res) => {
  const fruit = await Fruit.findById(req.params.fruitId)
  res.render("fruits/show.ejs", { fruit })
}

exports.fruite_edit_get = async (req, res) => {
  const fruit = await Fruit.findById(req.params.fruitId)
  res.render("fruits/edit.ejs", { fruit })
}

exports.fruite_update_put = async (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true
  } else {
    req.body.isReadyToEat = false
  }

  await Fruit.findByIdAndUpdate(req.params.fruitId, req.body)
  res.redirect(`/fruits/${req.params.fruitId}`)
}

exports.fruite_delate_delate = async (req, res) => {
  await Fruit.findByIdAndDelete(req.params.fruitId)
  res.redirect("/fruits")

}
