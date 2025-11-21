import React from "react";
import {Download} from "lucide-react";

export default function ExportSummary({summary}) {
    const exportTxt = (text) => {
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'ClearCut_resumo.txt';
        link.click();
        URL.revokeObjectURL(link.href);
    }

    const exportPdf = async (text) => {
        const { default: jsPDF } = await import("jspdf");
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 10;
        const maxLineWidth = pageWidth - margin * 2;

        const splitText = doc.splitTextToSize(text, maxLineWidth);
        doc.text(splitText, margin, 20);
        doc.save("ClearCut_resumo.pdf");
    }

    return (
    <div className="flex flex-wrap gap-3 mt-2">
      <button
        onClick={() => exportTxt(summary)}
        className="px-2 py-2 text-center rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 text-white font-semibold shadow-md shadow-blue-400/50 backdrop-blur-md border border-white/40 hover:from-blue-500 hover:to-cyan-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400 transition-all duration-300"
      >
        Exp .txt <Download size="18px"/>
      </button>

      <button
        onClick={() => exportPdf(summary)}
        className="px-2 py-2 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 text-white font-semibold shadow-md shadow-green-400/50 backdrop-blur-md border border-white/40 hover:from-green-500 hover:to-emerald-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-400 transition-all duration-300"
      >
        Exp .pdf <Download size="18px"/>
      </button>
    </div>
    );
}