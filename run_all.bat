@echo off
start cmd /k "cd /d backend && call venv\Scripts\activate.bat && uvicorn app:app --reload"
start cmd /k "cd /d frontend && npm run dev"
