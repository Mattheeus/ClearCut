from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from openai import OpenAI
import os
import logging
from dotenv import load_dotenv

load_dotenv()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key=os.getenv("OPENAI_API_KEY")
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TextInput(BaseModel):
    text: str
    model: str


MODEL_CONFIG = {
    "meta/llama-3.1-8b-instruct": {
        "max_tokens": 256,
        "temperature": 0.2,
        "top_p": 0.7,
    },

    "meta/llama-3.3-70b-instruct": {
        "max_tokens": 521,
        "temperature": 0.1,
        "top_p": 0.7,
    },

    "meta/llama-3.1-405b-instruct": {
        "max_tokens": 1024,
        "temperature": 0.1,
        "top_p": 0.9,
    },
}


@app.post("/summarize")
async def summarize_text(input: TextInput):
    if not input.text.strip():
        return JSONResponse(status_code=400, content={"error": "Texto de entrada vazio."})

    params = MODEL_CONFIG.get(
        input.model, MODEL_CONFIG["meta/llama-3.1-8b-instruct"])

    try:
        response = client.chat.completions.create(
            model=input.model,
            messages=[
                {"role": "system", "content": "Usuário enviara um link com as informações ou um texto. Resuma o texto de forma clara e direta e bem explicativa. Os textos devem ter menor numeros de linhas do que o texto fornecido ou link fornecido."},
                {"role": "user", "content": input.text}
            ],
            **params
            # stream=True

        )
        summary = response.choices[0].message.content
        return {"summary": summary}

    except Exception as e:
        logger.error(f"Erro ao chamar a API: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={
                "error": "Erro ao processar o texto. Por favor, tente novamente mais tarde."}
        )
