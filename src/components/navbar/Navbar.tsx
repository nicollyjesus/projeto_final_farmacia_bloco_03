import { Link } from 'react-router-dom';
import { FirstAidKit, List } from '@phosphor-icons/react';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-green-700 via-teal-700 to-cyan-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo com Link */}
          <Link to="/home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <FirstAidKit size={40} weight="fill" />
            <span className="text-2xl font-bold">Farmácia Saúde+</span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/home" 
              className="hover:text-green-200 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/categorias" 
              className="hover:text-green-200 transition-colors font-medium"
            >
              Categorias
            </Link>
            <Link 
              to="/cadastroCategoria"
              className="bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-full font-medium transition-colors"
            >
              Nova Categoria
            </Link>
          </div>

          {/* Menu Mobile */}
          <button className="md:hidden hover:text-green-200 transition-colors">
            <List size={32} weight="bold" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;