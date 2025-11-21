import React from "react";
import mammoth from "mammoth";

export default function ImportSummary({ setText }) {
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Limite (50 MB)
    if (file.size > 50 * 1024 * 1024) {
      alert("Arquivo muito grande. Máx 3 MB.");
      e.target.value = "";
      return;
    }

    const ext = file.name.split(".").pop().toLowerCase();

    // TXT
    if (ext === "txt") {
      try {
        const text = await file.text();
        setText(text.trim());
      } catch (err) {
        console.error("Erro ao ler TXT:", err);
        setText("Erro ao importar arquivo TXT.");
      } finally {
        e.target.value = "";
      }
      return;
    }

    // DOCX
    if (ext === "docx") {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        let text = result.value;

        // limpeza robusta do texto
        text = text
          .replace(/\r/g, "")
          .replace(/\t/g, " ")
          .replace(/[ \u00A0]{2,}/g, " ")
          .replace(/\n{3,}/g, "\n\n")
          .trim();

        setText(text);
      } catch (err) {
        console.error("Erro ao ler DOCX:", err);
        setText("Erro ao importar o arquivo .DOCX.");
      } finally {
        e.target.value = "";
      }
      return;
    }

    alert("Formato não suportado. Use .txt ou .docx");
    e.target.value = "";
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <label
        htmlFor="file-upload"
        className="cursor-pointer bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-full shadow-md shadow-green-400/40 border border-white/40 transition hover:scale-105 hover:shadow-lg"
      >
        📂 Importar Texto
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".txt, .docx"
        className="hidden"
        onChange={handleFileUpload}
      />
      <small className="text-gray-600 mt-2 text-sm">
        Suporta arquivos .txt e .docx
      </small>
    </div>
  );
}
