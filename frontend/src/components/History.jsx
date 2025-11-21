import React, { useState, useEffect } from "react";

export default function History({ newSummary, onSelect }) {
  const [history, setHistory] = useState([]);
  const [open, setOpen] = useState(false);

  // Carrega histórico inicial
  useEffect(() => {
    const stored = localStorage.getItem("clearcut_history");
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  // Salva novo resumo no histórico apenas se veio da API (newSummary)
  useEffect(() => {
    if (newSummary && newSummary.trim()) {
      const newEntry = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        text: newSummary,
      };
      const updated = [newEntry, ...history.slice(0, 9)]; // mantém os 10 mais recentes
      setHistory(updated);
      localStorage.setItem("clearcut_history", JSON.stringify(updated));
    }
  }, [newSummary]); // depende apenas do resumo da API

  const handleDelete = (id) => {
    const filtered = history.filter((item) => item.id !== id);
    setHistory(filtered);
    localStorage.setItem("clearcut_history", JSON.stringify(filtered));
  };

  return (
    <div className="mt-4">
      {/* Botão de abrir/fechar histórico */}
      <button
        onClick={() => setOpen(!open)}
        className="m-2 px-2 py-2 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 text-white font-semibold shadow-md shadow-green-400/50 backdrop-blur-md border border-white/40 hover:from-green-500 hover:to-emerald-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-400 transition-all duration-300"
      >
        {open ? "Fechar Histórico" : "Abrir Histórico"}
      </button>

      {open && (
        <div className="m-2 p-6 rounded-2xl bg-gray-100/30 backdrop-blur-md shadow-xl shadow-emerald-400/40 border border-white/20 shadow-inner text-gray-800">
          {history.length === 0 ? (
            <p className="text-gray-500 text-center">Nenhum resumo salvo.</p>
          ) : (
            history.map(({ id, timestamp, text }) => (
              <div
                key={id}
                className="mb-2 p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100/40 rounded "
                onClick={() => onSelect && onSelect(text)}
              >
                <div className="flex justify-between items-center">
                  <small className="text-gray-400">
                    {new Date(timestamp).toLocaleString()}
                  </small>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(id);
                    }}
                    className="py-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 text-white font-semibold shadow-md shadow-green-400/50 backdrop-blur-md border border-white/40 hover:from-green-500 hover:to-emerald-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-400 transition-all duration-300"
                    title="Apagar resumo"
                  >
                    &times;
                  </button>
                </div>
                <p className="text-gray-700 line-clamp-2">{text}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
