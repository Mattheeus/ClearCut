export default function TextInput({ text, setText }) {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      rows={10}
      className="w-full h-50 p-4 rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-inner text-gray-800 shadow-lg shadow-emerald-400/40 placeholder-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Cole aqui o seu texto/link ou importe um arquivo para resumir..."
    />
  );
}
