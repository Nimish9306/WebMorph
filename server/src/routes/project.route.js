import express from "express"
import Project from "../models/project.model.js"

const router = express.Router()
router.get("/:userId", async (req, res) => {
  try {

    const projects = await Project.find({
      userId: req.params.userId,
    }).sort({ createdAt: -1 })

    res.json({
      success: true,
      projects,
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    })

  }
})

router.put("/:id/rename", async (req, res) => {
  try {

    const { prompt } = req.body

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { prompt },
      { new: true }
    )

    res.json({
      success: true,
      project,
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false,
      message: "Rename failed",
    })

  }
})
router.put("/:id", async (req, res) => {
  try {

    const { generatedJson } = req.body

    const updatedProject =
      await Project.findByIdAndUpdate(
        req.params.id,
        {
          generatedJson,
        },
        {
          new: true,
        }
      )

    res.json({
      success: true,
      project: updatedProject,
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false,
      message: "Update failed",
    })

  }
})

router.delete("/:id", async (req, res) => {
  try {

    await Project.findByIdAndDelete(
      req.params.id
    )

    res.json({
      success: true,
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false,
      message: "Delete failed",
    })

  }
})

export default router