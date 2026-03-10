import { motion } from 'motion/react';
import { PALAVRA_METHODOLOGY } from '../data/utils';
import { Sparkles, ShieldCheck, Heart, Lightbulb } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function MethodologyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />

      <header className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            A Metodologia <span className="text-cyan-400">P.A.L.A.V.R.A</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Uma ponte entre o conhecimento acadêmico oficial e a sabedoria cristã milenar, transformando a sala de aula em um espaço de missão e reflexão.
          </p>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-6">
          <div className="p-6 bg-slate-800/40 border border-white/5 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Respeito à Ciência</h3>
            </div>
            <p className="text-slate-400">
              A BNCC é a base. Não substituímos o conteúdo científico por teologia. Ensinamos a ciência com rigor acadêmico.
            </p>
          </div>
          <div className="p-6 bg-slate-800/40 border border-white/5 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Educação Integral</h3>
            </div>
            <p className="text-slate-400">
              O aluno é visto como um ser completo: intelectual, emocional e espiritual. Buscamos o desenvolvimento de todas as dimensões.
            </p>
          </div>
          <div className="p-6 bg-slate-800/40 border border-white/5 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Pensamento Crítico</h3>
            </div>
            <p className="text-slate-400">
              Incentivamos o diálogo entre diferentes cosmovisões, preparando o aluno para defender sua fé com razão e respeito.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 blur-[100px] rounded-full" />
          <div className="relative grid grid-cols-2 gap-4">
            {PALAVRA_METHODOLOGY.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-slate-900/80 border border-white/10 rounded-2xl text-center"
              >
                <div className="text-3xl font-black text-cyan-400 mb-2">{step.letter}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{step.title.split(' ')[0]}</div>
              </motion.div>
            ))}
            <div className="p-6 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-2xl flex items-center justify-center">
              <Sparkles className="text-white w-10 h-10" />
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-slate-900/50 rounded-[3rem] border border-white/5 px-8 md:px-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Os 7 Pilares da PALAVRA</h2>
        <div className="space-y-12">
          {PALAVRA_METHODOLOGY.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-cyan-600 flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-cyan-600/20">
                {step.letter}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-lg text-slate-400 leading-relaxed">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
