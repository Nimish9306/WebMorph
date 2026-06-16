import OpenAI from "openai"
import dotenv from "dotenv"

dotenv.config()

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
})

export const generateWebsite = async (prompt) => {
  const completion = await client.chat.completions.create({
  model: "openai/gpt-3.5-turbo",

  messages: [
    {
  role: "system",
  content: `
You are an AI website architect.

Generate a modern SaaS landing page.

Return ONLY valid JSON.

Use EXACTLY this schema:

{
  "landingPage": {
    "header": {
      "logo": "",
      "navigation": []
    },

    "heroSection": {
      "title": "",
      "subtitle": "",
      "ctaText": ""
    },

    "featuresSection": {
      "title": "",
      "features": [
        {
          "title": "",
          "description": ""
        }
      ]
    },

    "pricingSection": {
      "title": "",
      "plans": [
        {
          "name": "",
          "price": "",
          "features": []
        }
      ]
    },

    "contactSection": {
      "title": "",
      "cta": ""
    },

    "footer": {
      "copyright": ""
    }
  }
}

Rules:
- Return raw JSON only
- No markdown
- No explanations
- No code blocks
- Use camelCase only
- Never use snake_case
- Follow schema exactly
`
},

    {
      role: "user",
      content: prompt,
    },
  ],
})

  return completion.choices[0].message.content
}