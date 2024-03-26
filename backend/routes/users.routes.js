const express = require("express")
const router = express.Router()
const {login, signup, findAllUsers} = require("../controllers/users.controllers")


router.get('/', findAllUsers) //get localhost:3000/api/books/
router.post("/signup", signup)
router.post("/login", login)

module.exports = router
