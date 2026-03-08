/**
 * Chat with SkyGuide Weather Agent via TypeScript (OpenAI SDK).
 * npm install openai
 */
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://dev.oya.ai/api/v1',
  apiKey: 'YOUR_API_KEY', // Replace with your key from https://dev.oya.ai/api-keys
});

async function main() {
  const response = await client.chat.completions.create({
    model: 'b978e78d-c74e-405f-80fc-3f160c75aac3',
    messages: [{ role: 'user', content: 'Hello!' }],
  });
  console.log(response.choices[0].message.content);
}

main();
