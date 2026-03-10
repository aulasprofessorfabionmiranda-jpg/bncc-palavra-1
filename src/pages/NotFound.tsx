import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-600 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-white mb-6">Página não encontrada</h2>
          <p className="text-slate-400 max-w-md mx-auto mb-10">
            O ramo da árvore que você está procurando parece não existir ou foi movido para outra área curricular.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold transition-all flex items-center"
            >
              <Home className="mr-2 w-5 h-5" />
              Voltar ao Início
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold transition-all flex items-center"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Voltar
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
