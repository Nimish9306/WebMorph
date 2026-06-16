import axios from "axios"

export const generateWebsite = async (prompt: string) => {
  const response = await axios.post(
    "http://localhost:5000/generate",
    {
      prompt,
    }
  )

  return response.data
}