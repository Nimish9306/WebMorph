import mongoose from "mongoose"

const projectSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    prompt: {
      type: String,
      required: true,
    },

    generatedJson: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model(
  "Project",
  projectSchema
)