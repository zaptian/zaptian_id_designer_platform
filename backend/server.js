const express = require("express")
const cors = require("cors")
require("dotenv").config()

const { sequelize, createDatabaseIfNotExists } = require("./config/db")
const authRoutes = require("./routes/authroutes")

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)

// Start Server
const startServer = async () => {
  try {
    // Step 1 — Create DB if not exists
    await createDatabaseIfNotExists()
    console.log("✅ Database checked/created successfully")

    // Step 2 — Authenticate Sequelize connection
    await sequelize.authenticate()
    console.log("✅ MySQL connected successfully")

    // Step 3 — Sync models (create tables if not exists)
    await sequelize.sync({ alter: false })
    console.log("✅ Tables synced successfully")

    // Step 4 — Start Express server
    app.listen(process.env.PORT, () => {
      console.log(`✅ Server running on port ${process.env.PORT}`)
    })

  } catch (error) {
    console.error("❌ Server startup error:", error)
    process.exit(1)
  }
}

startServer()