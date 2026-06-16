import dotenv from "dotenv"
dotenv.config()
import { connectDB } from "./config/db.js"
import express from "express"
import cors from "cors"
import projectRoute from "./routes/project.route.js"

import generateRoute from "./routes/generate.route.js"
import exportRoute from "./routes/export.route.js"

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/generate", generateRoute)
app.use("/api/projects", projectRoute)
app.use("/api/export", exportRoute)

app.get("/", (req, res) => {
  res.send("WebMorph API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})