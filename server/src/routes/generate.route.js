import express from "express"
import { generateWebsite } from "../services/gemini.service.js"
import Project from "../models/project.model.js"
const router = express.Router()

router.post("/", async (req, res) => {
  try {

    const { prompt, userId } = req.body

    const response = await generateWebsite(prompt)

    const parsedData = JSON.parse(response)

    const project = await Project.create({
      userId,
      prompt,
      generatedJson: parsedData,
    })

    res.json({
      success: true,
      project,
      data: parsedData,
    })

  } catch (error) {
    console.log(error)

    res.status(500).json({
      success: false,
      message: "Generation failed",
    })
  }
})

export default router