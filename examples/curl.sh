#!/bin/bash
# Chat with SkyGuide Weather Agent via cURL
# Replace YOUR_API_KEY with your actual API key from https://dev.oya.ai/api-keys

curl -X POST https://dev.oya.ai/api/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "b978e78d-c74e-405f-80fc-3f160c75aac3",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
