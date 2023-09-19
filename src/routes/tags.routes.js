const { Router } = require("express")
const TagsController = require("../controller/TagsController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsController = new TagsController()

const tagsRoutes = Router()

tagsRoutes.get("/", ensureAuthenticated, tagsController.index)

module.exports = tagsRoutes