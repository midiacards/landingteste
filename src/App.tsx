import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0f172a] text-[#f8fafc] min-h-screen font-sans selection:bg-pink-500/30">
      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-indigo-500/10 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[20%] w-[250px] h-[250px] bg-pink-500/10 blur-[80px] rounded-full"></div>
      </div>

      <header className="fixed w-full glass border-b border-white/5 z-50 p-6 flex justify-between items-center backdrop-blur-md">
        <h1 className="font-bold text-2xl tracking-tighter bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">CreativeLab</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#hero" className="text-white/70 hover:text-white transition">Início</a>
          <a href="#features" className="text-white/70 hover:text-white transition">Recursos</a>
        </nav>
      </header>

      <main className="pt-20">
        <section id="hero" className="h-[80vh] flex flex-col items-center justify-center text-center animate-on-scroll px-6">
          <span className="px-3 py-1 mb-6 text-xs font-semibold text-pink-500 bg-pink-500/10 border border-pink-500/20 rounded-full">Nova Versão 2.0</span>
          <h2 className="text-6xl font-extrabold tracking-tighter mb-6">Futuro Digital Redefinido.</h2>
          <p className="text-white/60 max-w-lg mb-8 text-lg">Crie experiências digitais modernas, interativas e responsivas com facilidade.</p>
          <a href="#features" className="bg-[#6366f1] text-white px-8 py-3 rounded-xl hover:bg-[#4f46e5] transition shadow-lg shadow-indigo-500/20">Iniciar Projeto</a>
        </section>

        <section id="features" className="py-24 animate-on-scroll px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold tracking-tight mb-12 text-center text-white">Nossos Recursos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-5 text-indigo-400">✦</div>
                  <h4 className="font-semibold mb-2 text-white">Funcionalidade {i}</h4>
                  <p className="text-white/50 text-sm">Design minimalista e interativo com animações perfeitas.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
