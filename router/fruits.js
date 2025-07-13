const router = require("express").Router()

const fruitsCtrl = require("../controllers/fruits")

//Routes
router.get("/new", fruitsCtrl.fruits_create_get)
router.post("", fruitsCtrl.fruits_create_post)
router.get("", fruitsCtrl.fruits_index_get)
router.get("/:fruitId", fruitsCtrl.fruite_show_get)

router.get("/:fruitId/edit", fruitsCtrl.fruite_edit_get)
router.put("/:fruitId", fruitsCtrl.fruite_update_put)

router.delete("/:fruitId", fruitsCtrl.fruite_delate_delate)

module.exports = router
