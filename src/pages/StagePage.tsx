import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { getStage } from '../data/utils';
import { ChevronRight, BookOpen, LayoutGrid } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function StagePage() {
  const { stageId } = useParams();
  const stage = getStage(stageId || '');

  if (!stage) return <Navigate to="/404" />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="text-cyan-400 w-6 h-6" />
          <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">Etapa de Ensino</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{stage.name}</h1>
        <p className="text-xl text-slate-400 max-w-3xl">{stage.description}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stage.areas.map((area, idx) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link to={`/${stage.id}/${area.id}`} className="block h-full">
              <div className="h-full p-8 bg-slate-800/40 border border-white/5 rounded-3xl hover:border-cyan-500/30 transition-all group relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/5 blur-2xl rounded-full group-hover:bg-cyan-500/10 transition-colors" />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-cyan-400">
                    <LayoutGrid size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Área do Conhecimento</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{area.name}</h3>
                <p className="text-slate-400 mb-8">
                  Contém {area.competencias.length} {area.competencias.length === 1 ? 'competência específica' : 'competências específicas'}.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {area.competencias.slice(0, 3).map(c => (
                    <span key={c.id} className="px-3 py-1 bg-slate-900/80 text-slate-400 text-xs rounded-full border border-white/5">
                      {c.name}
                    </span>
                  ))}
                  {area.competencias.length > 3 && (
                    <span className="px-3 py-1 bg-slate-900/80 text-slate-400 text-xs rounded-full border border-white/5">
                      +{area.competencias.length - 3} mais
                    </span>
                  )}
                </div>

                <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Ver Competências <ChevronRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
