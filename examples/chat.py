"""
Chat with SkyGuide Weather Agent via Python (OpenAI SDK).
pip install openai
"""
from openai import OpenAI

client = OpenAI(
    base_url="https://dev.oya.ai/api/v1",
    api_key="YOUR_API_KEY",  # Replace with your key from https://dev.oya.ai/api-keys
)

response = client.chat.completions.create(
    model="b978e78d-c74e-405f-80fc-3f160c75aac3",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
