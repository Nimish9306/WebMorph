import OpenAI from "openai"
import dotenv from "dotenv"

dotenv.config()

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
})

export const generateProjectCode = async (
  websiteData
) => {

  const completion =
    await client.chat.completions.create({

      model: "openai/gpt-3.5-turbo",

      messages: [
        {
          role: "system",
          content: `
You are an expert Next.js developer.

Convert website JSON into a production-ready Next.js project.

Return ONLY valid JSON.

Format:

{
  "files":[
    {
      "path":"src/app/page.tsx",
      "content":"..."
    }
  ]
}

Rules:
- Next.js 15
- TypeScript
- Tailwind CSS
- Responsive
- Component based
- No markdown
- No explanations
`
        },

        {
          role: "user",
          content: JSON.stringify(websiteData)
        }
      ]
    })

  return completion.choices[0].message.content
}