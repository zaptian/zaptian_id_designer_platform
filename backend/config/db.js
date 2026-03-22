const { Sequelize } = require("sequelize")
const mysql2 = require("mysql2/promise")
require("dotenv").config()

const createDatabaseIfNotExists = async () => {
  const connection = await mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  })
  await connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`
  )
  await connection.end()
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
)

module.exports = { sequelize, createDatabaseIfNotExists }