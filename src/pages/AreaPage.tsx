import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { getArea, getStage } from '../data/utils';
import { ChevronRight, ShieldCheck, LayoutGrid } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function AreaPage() {
  const { stageId, areaId } = useParams();
  const stage = getStage(stageId || '');
  const area = getArea(stageId || '', areaId || '');

  if (!stage || !area) return <Navigate to="/404" />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <LayoutGrid className="text-violet-400 w-6 h-6" />
          <span className="text-sm font-bold uppercase tracking-widest text-violet-400">Área: {stage.name}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{area.name}</h1>
        <p className="text-xl text-slate-400 max-w-3xl">Selecione uma competência específica da área para continuar.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {area.competencias.map((comp, idx) => (
          <motion.div
            key={comp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link to={`/${stage.id}/${area.id}/${comp.id}`} className="block h-full">
              <div className="h-full p-8 bg-slate-800/40 border border-white/5 rounded-3xl hover:border-violet-500/30 transition-all group relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-violet-400">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Competência</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">{comp.name}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{comp.description}</p>

                <div className="flex items-center text-violet-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Ver Matérias Relacionadas <ChevronRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
