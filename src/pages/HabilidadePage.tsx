import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { getHabilidade, getSubject, getStage, getArea, getCompetencia } from '../data/utils';
import { GraduationCap, ChevronRight, Sparkles, Info } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function HabilidadePage() {
  const { stageId, areaId, compId, subjectId, habId } = useParams();
  const stage = getStage(stageId || '');
  const area = getArea(stageId || '', areaId || '');
  const competencia = getCompetencia(stageId || '', areaId || '', compId || '');
  const subject = getSubject(stageId || '', areaId || '', compId || '', subjectId || '');
  const hab = getHabilidade(stageId || '', areaId || '', compId || '', subjectId || '', habId || '');

  if (!hab || !subject || !stage || !area || !competencia) return <Navigate to="/404" />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="text-cyan-400 w-6 h-6" />
          <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">Habilidade: {subject.name}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{hab.id}</h1>
        <div className="p-6 bg-slate-900/80 border border-white/10 rounded-2xl mb-12">
          <h3 className="text-sm font-bold text-slate-500 uppercase mb-2 flex items-center gap-2">
            <Info size={14} /> Descrição Oficial
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">{hab.description}</p>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Sparkles className="text-cyan-400" />
          Aulas Disponíveis
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hab.aulas.map((aula, idx) => (
            <motion.div
              key={aula.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={`/${stageId}/${areaId}/${compId}/${subjectId}/${habId}/${aula.id}`} className="block h-full">
                <div className="h-full p-8 bg-slate-800/40 border border-white/5 rounded-3xl hover:border-cyan-500/30 transition-all group">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{aula.name}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">{aula.description}</p>
                  <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Ver Metodologia PALAVRA <ChevronRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
