import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TreePage from './pages/TreePage';
import StagePage from './pages/StagePage';
import AreaPage from './pages/AreaPage';
import CompetenciaPage from './pages/CompetenciaPage';
import SubjectPage from './pages/SubjectPage';
import HabilidadePage from './pages/HabilidadePage';
import AulaPage from './pages/AulaPage';
import MethodologyPage from './pages/MethodologyPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        <ScrollToTop />
        <Navbar />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arvore" element={<TreePage />} />
            <Route path="/metodologia" element={<MethodologyPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            
            {/* Dynamic BNCC Routes - New Hierarchy */}
            <Route path="/:stageId" element={<StagePage />} />
            <Route path="/:stageId/:areaId" element={<AreaPage />} />
            <Route path="/:stageId/:areaId/:compId" element={<CompetenciaPage />} />
            <Route path="/:stageId/:areaId/:compId/:subjectId" element={<SubjectPage />} />
            <Route path="/:stageId/:areaId/:compId/:subjectId/:habId" element={<HabilidadePage />} />
            <Route path="/:stageId/:areaId/:compId/:subjectId/:habId/:aulaId" element={<AulaPage />} />
            
            {/* 404 */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
