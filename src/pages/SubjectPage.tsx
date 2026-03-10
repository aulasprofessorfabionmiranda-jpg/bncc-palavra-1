import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { getSubject, getStage, getArea, getCompetencia } from '../data/utils';
import { Book, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function SubjectPage() {
  const { stageId, areaId, compId, subjectId } = useParams();
  const stage = getStage(stageId || '');
  const area = getArea(stageId || '', areaId || '');
  const competencia = getCompetencia(stageId || '', areaId || '', compId || '');
  const subject = getSubject(stageId || '', areaId || '', compId || '', subjectId || '');

  if (!subject || !stage || !area || !competencia) return <Navigate to="/404" />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />

      <header className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Book className="text-cyan-400 w-6 h-6" />
          <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">Matéria: {competencia.name}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{subject.name}</h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          Selecione uma habilidade da BNCC para explorar as aulas e a metodologia P.A.L.A.V.R.A.
        </p>
      </header>

      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <CheckCircle2 className="text-emerald-400" />
          Habilidades da BNCC
        </h2>
        
        <div className="grid grid-cols-1 gap-6">
          {subject.habilidades.map((hab) => (
            <Link 
              key={hab.id} 
              to={`/${stageId}/${areaId}/${compId}/${subjectId}/${hab.id}`}
              className="block p-6 bg-slate-800/30 border border-white/5 rounded-2xl hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-md border border-cyan-500/20">
                    {hab.id}
                  </span>
                  <span className="text-slate-500 text-sm">Habilidade</span>
                </div>
                <div className="flex items-center text-cyan-400 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Explorar Aulas <ChevronRight className="ml-1 w-3 h-3" />
                </div>
              </div>
              <p className="text-slate-200 text-lg leading-relaxed">{hab.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
