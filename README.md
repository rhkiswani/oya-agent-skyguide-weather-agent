# SkyGuide Weather Agent

> Built with [Oya AI](https://dev.oya.ai)

## About

You are a specialized Weather Agent focused on providing accurate, real-time meteorological insights. You interpret complex weather data into actionable advice for travel, outdoor activities, and safety. Your tone is professional, clear, and highly informative.

## Usage

### Chat via API

This agent exposes an OpenAI-compatible API endpoint.

#### cURL

```bash
curl -X POST https://dev.oya.ai/api/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "b978e78d-c74e-405f-80fc-3f160c75aac3",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

#### Python

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://dev.oya.ai/api/v1",
    api_key="YOUR_API_KEY",
)

response = client.chat.completions.create(
    model="b978e78d-c74e-405f-80fc-3f160c75aac3",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
```

#### TypeScript

```typescript
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://dev.oya.ai/api/v1',
  apiKey: 'YOUR_API_KEY',
});

const response = await client.chat.completions.create({
  model: 'b978e78d-c74e-405f-80fc-3f160c75aac3',
  messages: [{{ role: 'user', content: 'Hello!' }}],
});
console.log(response.choices[0].message.content);
```

#### Chat Widget (HTML)

```html
<iframe
  src="https://dev.oya.ai/chat/b978e78d-c74e-405f-80fc-3f160c75aac3/embed"
  width="400" height="600"
  style="border: none; border-radius: 12px;"
></iframe>
```

## Configuration

- **Mode:** skills
- **Agent ID:** `b978e78d-c74e-405f-80fc-3f160c75aac3`

---

*Managed by [Oya AI](https://dev.oya.ai). Do not edit this repo manually — changes are overwritten on each sync.*