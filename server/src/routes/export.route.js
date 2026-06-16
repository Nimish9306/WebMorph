import express from "express"
import { generateProjectCode } from "../services/export.services.js"
const router = express.Router()

router.post("/", async (req, res) => {
  try {

    console.log("BODY", req.body)

    const { websiteData } = req.body

    const response =
      await generateProjectCode(websiteData)

    console.log("AI RESPONSE", response)

    const parsedData = JSON.parse(response)

    res.json({
      success: true,
      data: parsedData,
    })

  } catch (error) {

    console.log("EXPORT ERROR")
    console.log(error)

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

export default router