const express = require("express")
const router = express.Router()
const { register } = require("../controllers/authcontroller")

// POST /api/auth/register
router.post("/register", register)

module.exports = router
