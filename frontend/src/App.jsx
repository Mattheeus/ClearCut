import { useState, useRef } from 'react'
import Header from './components/Header'
import ResultBox from './components/ResultBox'
import TextInput from './components/TextInput'
import ImportSummary from './components/ImportSummary';
import ExportSummary from './components/ExportSummary'
import History from './components/History'

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [apiSummary, setApiSummary] = useState(""); // resumo da API
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("meta/llama-3.1-8b-instruct");

  const handleSummarize = async () => {
    if(!text.trim()){
      setSummary("Por favor, insira um texto para resumir.");
      return;
    }

    setLoading(true);
    setSummary(""); // Limpa o resumo anterior


    try{ 
      const res = await fetch(`${import.meta.env.VITE_API_URL}/summarize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text, model })
    });
    
      const data = await res.json();
      if (data.summary){
        setSummary(data.summary);
        setApiSummary(data.summary); // Armazena o resumo da API
      } else if (data.error){
        setSummary("Erro: " + data.error);
      } else{
        setSummary("Erro Desconhecido.");
      }

    } catch (error) {
    setSummary("Erro ao conectar com a IA.");
    } finally {
      setLoading(false);
    }
    
  };

  return(
    <div className="min-h-screen w-screen bg-gradient-to-br from-cyan-300 via-white to-emerald-400  text-gray-900 p-8">
      <div className="max-w-3xl mx-auto">
        <Header />

          {/*<History newSummary={apiSummary} onSelect={(text) => setSummary(text)} /> */}

        <TextInput text={text} setText={setText} />
        <ImportSummary setText={setText} />

        <div className="mt-2">
          <label className="block text-sm font-semibold">Modelo de IA:</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="p-1 w-100% bg-white/10 border border-cyan-300 rounded-md shadow-md shadow-cyan-300/30 focus:outline-none focus:ring-1 focus:ring-cyan-300 transition"
            >
                <option value="meta/llama-3.1-8b-instruct">LLaMA3.1 8B (Meta) Rapido</option>
                <option value="meta/llama-3.3-70b-instruct">LLaMA3.3 70B (Meta) Intermediario </option>
                <option value="meta/llama-3.1-405b-instruct"> LLaMA3.1 405B (Meta) Poderoso </option>

            </select>
        </div>

        <button
          onClick={handleSummarize}
          disabled={loading}
          className={`mt-4 px-6 py-2 font-semibold rounded-full shadow-md shadow-blue-400/50 backdrop-blur-md transition-all duration-200
            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-400 hover:bg-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-400 border border-white/40 text-white'}`}
        >
          {loading ? "Resumindo..." : "Resumir Texto"}
        </button>

        {loading && (
          <p className="mt-2 text-sm text-gray-700 animate-pulse">
            ⏳ Resumo sendo gerado, por favor aguarde...
          </p>
        )}

        <ResultBox summary={summary} />
        {summary && <ExportSummary summary={summary} />}

      </div>
    </div>
  );
  
};

export default App
