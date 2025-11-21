# ClearCut 📝

ClearCut é uma aplicação web que utiliza IA para **resumir textos longos** de forma clara e direta.  
Permite importar arquivos `.txt` ou `.docx`, exportar resultados em `.txt` ou `.pdf` e selecionar diferentes modelos de IA.

---

## 🚀 Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-2073E7?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-20C1AC?style=for-the-badge&logo=tailwind-css)
![FastAPI](https://img.shields.io/badge/FastAPI-201688?style=for-the-badge&logo=fastapi)
![Python](https://img.shields.io/badge/Python-2090A9?style=for-the-badge&logo=python)
![OpenAI API Compatible](https://img.shields.io/badge/OpenAI%20API-Compatible-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

---

## 🌟 Funcionalidades

- Resumir textos de forma clara e objetiva  
- Suporte a múltiplos modelos de IA (Meta LLaMA)    
- Exportar resumos para `.txt` ou `.pdf`  
- Importar arquivos `.txt` ou `.docx`  
- Interface responsiva com Tailwind CSS

---

## 📸 Screenshot / GIF

<img width="500" height="500" alt="Screenshot 2025-11-19 230746" src="https://github.com/user-attachments/assets/c9400c3e-ab18-4225-942d-ae0c496d2746" />

---

## ⚡ Instalação

### Backend

1. Entrar na pasta backend:

```bash
cd backend
```

2. Criar e ativar ambiente virtual:
```bash
## Windows
python -m venv venv
venv\Scripts\activate

## Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

3. Instalar dependências:
```bash
pip install -r requirements.txt
```
4. Criar arquivo .env na pasta Backend:
```bash
OPENAI_API_KEY=SEU_TOKEN_AQUI
```
Você deve gerar a key por este link: https://build.nvidia.com/settings/api-keys

5. Rodar servidor:
```bash
uvicorn app:app --reload
```

---

### Frontend

1. Entrar na pasta frontend:
```bash
cd frontend
```

2.Instalar dependências:
```bash
npm install

```

3.Rodar aplicação local:
```bash
npm run dev
```

4. Abra no navegador: http://localhost:5173/
