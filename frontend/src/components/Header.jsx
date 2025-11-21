export default function Header(){
    return (
        <header className="text-center mb-4">
            <h1 className="text-5xl font-bold text-blue-600 drop-shadow-sm">
                <div className="inline-block animate-pulse border p-2 rounded-full bg-white/20 backdrop-blur-md shadow-lg shadow-cyan-300/50">
                    <img src="/ClearCat.png" alt="Logo" width={"100"} height={"100"}/>
                </div>
                <br></br>
                ClearCut
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-500">
                Resumo de textos com IA
            </p>
        </header>
    );
}