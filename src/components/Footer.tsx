import { Link } from 'react-router-dom';
import { BookOpen, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-white">BNCC na P.A.L.A.V.R.A</span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Transformando a educação básica através de uma plataforma interativa que une a BNCC com a metodologia pedagógica cristã.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Plataforma</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/arvore" className="hover:text-cyan-400 transition-colors">Árvore BNCC</Link></li>
              <li><Link to="/ensino-fundamental" className="hover:text-cyan-400 transition-colors">Ensino Fundamental</Link></li>
              <li><Link to="/ensino-medio" className="hover:text-cyan-400 transition-colors">Ensino Médio</Link></li>
              <li><Link to="/metodologia" className="hover:text-cyan-400 transition-colors">Metodologia PALAVRA</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Suporte</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/sobre" className="hover:text-cyan-400 transition-colors">Sobre o Projeto</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Guia do Professor</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center"><Mail size={16} className="mr-2" /> Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 BNCC na P.A.L.A.V.R.A. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300">Privacidade</a>
            <a href="#" className="hover:text-slate-300">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
