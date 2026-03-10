import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { getCompetencia, getStage, getArea } from '../data/utils';
import { ChevronRight, Book, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function CompetenciaPage() {
  const { stageId, areaId, compId } = useParams();
  const stage = getStage(stageId || '');
  const area = getArea(stageId || '', areaId || '');
  const competencia = getCompetencia(stageId || '', areaId || '', compId || '');

  if (!stage || !area || !competencia) return <Navigate to="/404" />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="text-emerald-400 w-6 h-6" />
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-400">Competência: {area.name}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{competencia.name}</h1>
        <p className="text-xl text-slate-400 max-w-3xl">{competencia.description}</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {competencia.subjects.map((subject, idx) => (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Link to={`/${stageId}/${areaId}/${compId}/${subject.id}`} className="block h-full">
              <div className="h-full p-6 bg-slate-800/40 border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Book size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{subject.name}</h3>
                <p className="text-sm text-slate-400 mb-6">Explorar habilidades e aulas para este componente.</p>
                <div className="flex items-center text-emerald-400 text-sm font-bold group-hover:translate-x-1 transition-transform">
                  Acessar Matéria <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
