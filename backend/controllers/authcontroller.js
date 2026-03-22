const bcrypt = require("bcrypt")
const User = require("../models/user")

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, password, confirmPassword } = req.body

    // 1 — Check all fields present
    if (!firstName || !lastName || !email || !mobile || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" })
    }

    // 2 — Check password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" })
    }

    // 3 — Check email already exists
    const existingEmail = await User.findOne({ where: { email } })
    if (existingEmail) {
      return res.status(409).json({ message: "Email already registered" })
    }

    // 4 — Check mobile already exists
    const existingMobile = await User.findOne({ where: { mobile } })
    if (existingMobile) {
      return res.status(409).json({ message: "Mobile number already registered" })
    }

    // 5 — Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // 6 — Save user to DB
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      mobile,
      password: hashedPassword,
    })

    return res.status(201).json({
      message: "Account created successfully",
      user: {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        mobile: newUser.mobile,
      },
    })

  } catch (error) {
    console.error("Register error:", error)
    return res.status(500).json({ message: "Internal server error" })
  }
}

module.exports = { register }
