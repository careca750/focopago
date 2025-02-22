import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1E1E1E] fixed w-full z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-[#00D084]">FocoPago</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/planos" className="hover:text-[#00D084] transition-colors">Planos</Link>
            <Link to="/sobre" className="hover:text-[#00D084] transition-colors">Sobre</Link>
            <Link to="/ajuda" className="hover:text-[#00D084] transition-colors">Ajuda</Link>
            <Link to="/blog" className="hover:text-[#00D084] transition-colors">Blog</Link>
            <Link to="/empresas" className="hover:text-[#00D084] transition-colors">Empresas</Link>
            <Link to="/login" className="hover:text-[#00D084] transition-colors">Entrar</Link>
            <Link 
              to="/cadastro" 
              className="bg-[#00D084] text-black px-6 py-2 rounded-full font-bold hover:bg-[#00D084]/90 transition-all"
            >
              Começar Grátis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            <Link to="/planos" className="block hover:text-[#00D084] transition-colors">Planos</Link>
            <Link to="/sobre" className="block hover:text-[#00D084] transition-colors">Sobre</Link>
            <Link to="/ajuda" className="block hover:text-[#00D084] transition-colors">Ajuda</Link>
            <Link to="/blog" className="block hover:text-[#00D084] transition-colors">Blog</Link>
            <Link to="/empresas" className="block hover:text-[#00D084] transition-colors">Empresas</Link>
            <Link to="/login" className="block hover:text-[#00D084] transition-colors">Entrar</Link>
            <Link 
              to="/cadastro"
              className="block w-full bg-[#00D084] text-black px-6 py-2 rounded-full font-bold hover:bg-[#00D084]/90 transition-all text-center"
            >
              Começar Grátis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}