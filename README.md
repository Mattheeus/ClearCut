# ClearCut 📝

ClearCut é uma aplicação web que utiliza IA para **resumir textos longos** de forma clara e direta.  
Permite importar arquivos `.txt` ou `.docx`, exportar resultados em `.txt` ou `.pdf` e selecionar diferentes modelos de IA.

---

## 🌟 Funcionalidades

- Resumir textos de forma clara e objetiva  
- Suporte a múltiplos modelos de IA (Meta LLaMA)    
- Exportar resumos para `.txt` ou `.pdf`  
- Importar arquivos `.txt` ou `.docx`  
- Interface responsiva com Tailwind CSS  

---

## 📸 Screenshot / GIF

<img width="500" height="500" alt="Screenshot 2025-11-19 230746" src="https://github.com/user-attachments/assets/4a950ce0-9812-47b9-a54e-f2613cfdc13a" />


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
