export default function ResultBox({summary}) {
    if(!summary) return null;
    return(
        <div className="mt-6 p-6 rounded-2xl bg-gray-100/30 backdrop-blur-md shadow-xl shadow-emerald-400/40 border border-white/20 shadow-inner text-gray-800">
            <h2 className="font-semibold mb-2 text-xl text-blue-600">Resumo:</h2>
            <p className="whitespace-pre-line">{summary}</p>
        </div>
    );
}