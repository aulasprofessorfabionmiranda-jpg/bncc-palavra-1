import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />

      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Sobre o Projeto</h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          O BNCC na P.A.L.A.V.R.A nasceu do desejo de oferecer uma ferramenta tecnológica de ponta para educadores cristãos que buscam excelência acadêmica e fidelidade bíblica.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000"
            alt="Educação e Tecnologia"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-bold rounded-full">Inovação Pedagógica</span>
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Nossa Missão</h2>
            <p className="text-slate-400 leading-relaxed">
              Capacitar professores e alunos a compreenderem a estrutura da BNCC através de uma interface moderna, enquanto estimulamos o pensamento crítico e a reflexão ética baseada em princípios cristãos.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Visão de Futuro</h2>
            <p className="text-slate-400 leading-relaxed">
              Tornar-se a principal referência em EdTech para o ensino confessional no Brasil, unindo o que há de mais moderno em tecnologia web com a profundidade da tradição educacional cristã.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="p-3 bg-white/5 hover:bg-white/10 text-slate-300 rounded-xl border border-white/10 transition-all">
              <Mail size={20} />
            </button>
            <button className="p-3 bg-white/5 hover:bg-white/10 text-slate-300 rounded-xl border border-white/10 transition-all">
              <Github size={20} />
            </button>
            <button className="p-3 bg-white/5 hover:bg-white/10 text-slate-300 rounded-xl border border-white/10 transition-all">
              <Linkedin size={20} />
            </button>
          </div>
        </div>
      </div>

      <section className="py-16 border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Parceiros e Apoio</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {['Educação Cristã', 'BNCC Digital', 'Pedagogia Viva', 'Missão Ensino'].map((p) => (
            <div key={p} className="flex items-center gap-2 text-xl font-bold text-slate-400">
              <ExternalLink size={20} />
              {p}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
