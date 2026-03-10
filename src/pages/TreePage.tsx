import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BNCC_DATA } from '../data/bncc';
import { ChevronRight, Layers, GraduationCap, Baby } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function TreePage() {
  const icons = [Baby, Layers, GraduationCap];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />
      
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Árvore Curricular BNCC</h1>
        <p className="text-xl text-slate-400 max-w-3xl">
          Explore a estrutura completa da Base Nacional Comum Curricular, desde a Educação Infantil até o Ensino Médio.
        </p>
      </header>

      <div className="relative">
        {/* Vertical Line for Tree */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-transparent hidden md:block" />

        <div className="space-y-12">
          {BNCC_DATA.map((stage, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Node Circle */}
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-cyan-400 z-10 hidden md:flex">
                  <Icon size={24} />
                </div>

                <div className="bg-slate-800/40 border border-white/5 rounded-3xl p-8 hover:border-cyan-500/30 transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Etapa</span>
                        <div className="h-px w-8 bg-cyan-400/30" />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-3">{stage.name}</h2>
                      <p className="text-slate-400 max-w-xl">{stage.description}</p>
                    </div>
                    <Link
                      to={`/${stage.id}`}
                      className="inline-flex items-center px-6 py-3 bg-cyan-600/10 hover:bg-cyan-600 text-cyan-400 hover:text-white rounded-xl font-bold transition-all border border-cyan-600/20"
                    >
                      Explorar Etapa
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>

                  {stage.areas.length > 0 && (
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {stage.areas.map((area) => (
                        <Link
                          key={area.id}
                          to={`/${stage.id}/${area.id}`}
                          className="p-4 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-cyan-500/20 hover:bg-slate-900 transition-all text-slate-300 hover:text-white flex items-center justify-between group/item"
                        >
                          <span className="font-medium truncate">{area.name}</span>
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
