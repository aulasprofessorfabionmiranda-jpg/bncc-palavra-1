import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex mb-8 text-sm font-medium text-slate-400" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center hover:text-cyan-400 transition-colors">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const name = value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

          return (
            <li key={to}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1 text-slate-600" />
                {last ? (
                  <span className="text-cyan-400 font-semibold">{name}</span>
                ) : (
                  <Link to={to} className="hover:text-cyan-400 transition-colors">
                    {name}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
