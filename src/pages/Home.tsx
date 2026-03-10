import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, GraduationCap, Globe, Lightbulb } from 'lucide-react';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Watermark / Video Effect */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <img 
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000" 
          alt="Library Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
        
        {/* Animated Particles/Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/20 blur-[120px] rounded-full" 
        />

        {/* Large Watermark Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Logo size={800} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <Logo size={120} className="drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]" />
            </div>
            
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20 backdrop-blur-sm"
            >
              Educação Integral & Cosmovisão Cristã
            </motion.span>
            
            <motion.h1 
              className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              BNCC na <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-violet-500 bg-[length:200%_auto]"
                animate={{ 
                  backgroundPosition: ['0% center', '200% center'] 
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                P.A.L.A.V.R.A
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="max-w-3xl mx-auto text-xl text-slate-300 mb-12 leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              A fusão perfeita entre a excelência acadêmica da BNCC e a profundidade eterna das Escrituras. Uma plataforma futurista para uma educação transformadora.
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/arvore"
                className="w-full sm:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-cyan-600/20 flex items-center justify-center group"
              >
                Explorar Árvore BNCC
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/metodologia"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-lg transition-all flex items-center justify-center"
              >
                Entender a BNCC
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stages Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Estrutura Curricular</h2>
            <p className="text-slate-400">Navegue pelas etapas da educação básica brasileira.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Educação Infantil',
                desc: 'Direitos de aprendizagem e campos de experiências para os pequenos.',
                icon: Globe,
                color: 'from-emerald-400 to-cyan-400',
                path: '/arvore'
              },
              {
                title: 'Ensino Fundamental',
                desc: 'Anos Iniciais e Finais organizados por áreas do conhecimento e matérias.',
                icon: BookOpen,
                color: 'from-cyan-400 to-blue-500',
                path: '/ensino-fundamental'
              },
              {
                title: 'Ensino Médio',
                desc: 'Aprofundamento acadêmico e preparação para o futuro profissional.',
                icon: GraduationCap,
                color: 'from-violet-500 to-fuchsia-500',
                path: '/ensino-medio'
              }
            ].map((stage, idx) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link to={stage.path} className="block h-full">
                  <div className="h-full p-8 bg-slate-800/40 border border-white/5 rounded-3xl hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-black/40 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stage.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity`} />
                    <div className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-white shadow-lg`}>
                      <stage.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{stage.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6">{stage.desc}</p>
                    <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                      Ver detalhes <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Teaser */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-8 md:p-16 border border-white/10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Metodologia <span className="text-cyan-400">P.A.L.A.V.R.A</span>
                </h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Não apenas ensinamos o conteúdo. Nós conectamos a ciência oficial com a história, a filosofia e a cosmovisão cristã, gerando uma educação integral e transformadora.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Respeito total ao conteúdo científico da BNCC',
                    'Contextualização histórica e filosófica',
                    'Diálogo honesto entre fé e razão',
                    'Aplicação prática e ética missional'
                  ].map((item) => (
                    <li key={item} className="flex items-center text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/metodologia"
                  className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors"
                >
                  Conheça a Metodologia
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['P', 'A', 'L', 'A', 'V', 'R', 'A'].map((letter, idx) => (
                  <div
                    key={idx}
                    className={`aspect-square rounded-2xl flex items-center justify-center text-4xl font-black border border-white/10 ${
                      idx % 2 === 0 ? 'bg-cyan-500/10 text-cyan-400' : 'bg-violet-500/10 text-violet-400'
                    }`}
                  >
                    {letter}
                  </div>
                ))}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
                  <Lightbulb className="text-white w-12 h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
