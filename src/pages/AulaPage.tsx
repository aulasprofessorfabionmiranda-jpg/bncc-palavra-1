import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { getAula, getHabilidade, getSubject } from '../data/utils';
import { Book, Info, ChevronDown, ChevronUp, Sparkles, ArrowLeft, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function AulaPage() {
  const { stageId, areaId, compId, subjectId, habId, aulaId } = useParams();
  const subject = getSubject(stageId || '', areaId || '', compId || '', subjectId || '');
  const hab = getHabilidade(stageId || '', areaId || '', compId || '', subjectId || '', habId || '');
  const aula = getAula(stageId || '', areaId || '', compId || '', subjectId || '', habId || '', aulaId || '');
  const [activeStep, setActiveStep] = useState<string | null>(null);

  if (!subject || !hab || !aula) return <Navigate to="/404" />;

  const steps = [
    { id: 'academica', letter: 'P', title: 'Análise Acadêmica', content: aula.palavraAnalysis.academica },
    { id: 'historica', letter: 'A', title: 'História', content: aula.palavraAnalysis.historica },
    { id: 'filosofica', letter: 'L', title: 'Filosofia', content: aula.palavraAnalysis.filosofica },
    { id: 'apologetica', letter: 'A', title: 'Apologética', content: aula.palavraAnalysis.apologetica },
    { id: 'biblica', letter: 'V', title: 'Bíblia', content: aula.palavraAnalysis.biblica },
    { id: 'reflexao', letter: 'R', title: 'Reflexão Missionária', content: aula.palavraAnalysis.reflexao },
    { id: 'missional', letter: 'A', title: 'Aplicação Prática', content: aula.palavraAnalysis.missional },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs />

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="text-cyan-400 w-6 h-6" />
          <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">Aula: {hab.id}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{aula.name}</h1>
            <p className="text-2xl text-slate-300 font-medium mb-2">{subject.name}</p>
          </div>
          <div className="px-4 py-2 bg-slate-800 rounded-xl border border-white/5 text-slate-400 text-sm">
            Metodologia <span className="text-cyan-400 font-bold">P.A.L.A.V.R.A</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-6">
            <div className="p-8 bg-slate-900/80 border border-white/10 rounded-3xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Info size={18} className="text-cyan-400" />
                Resumo da Aula
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {aula.description}
              </p>
            </div>
            
            <button 
              onClick={() => window.history.back()}
              className="w-full flex items-center justify-center gap-2 p-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl border border-white/10 transition-all"
            >
              <ArrowLeft size={18} />
              Voltar para Habilidade
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="mb-8 p-6 bg-gradient-to-r from-cyan-600/20 to-violet-600/20 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="text-cyan-400" size={24} />
              Metodologia PALAVRA
            </h2>
            <p className="text-slate-400">Explore a conexão didática e espiritual desta aula.</p>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.id} className="border border-white/5 rounded-2xl overflow-hidden bg-slate-800/20 backdrop-blur-sm">
                <button
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 text-xl font-black">
                      {step.letter}
                    </div>
                    <h4 className="text-xl font-bold text-white">{step.title}</h4>
                  </div>
                  {activeStep === step.id ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                </button>
                
                <AnimatePresence>
                  {activeStep === step.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-4 border-t border-white/5">
                        <p className="text-slate-300 leading-relaxed text-lg">
                          {step.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
