import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-[#00D084] mb-4 block">FocoPago</Link>
            <p className="text-white/60">
              Transforme sua produtividade em recompensas reais.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li><Link to="/planos" className="text-white/60 hover:text-[#00D084]">Planos</Link></li>
              <li><Link to="/empresas" className="text-white/60 hover:text-[#00D084]">Empresas</Link></li>
              <li><Link to="/sobre" className="text-white/60 hover:text-[#00D084]">Sobre</Link></li>
              <li><Link to="/blog" className="text-white/60 hover:text-[#00D084]">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><Link to="/ajuda" className="text-white/60 hover:text-[#00D084]">Central de Ajuda</Link></li>
              <li><Link to="/contato" className="text-white/60 hover:text-[#00D084]">Contato</Link></li>
              <li><Link to="/status" className="text-white/60 hover:text-[#00D084]">Status</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacidade" className="text-white/60 hover:text-[#00D084]">Privacidade</Link></li>
              <li><Link to="/termos" className="text-white/60 hover:text-[#00D084]">Termos</Link></li>
              <li><Link to="/cookies" className="text-white/60 hover:text-[#00D084]">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 FocoPago. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/60 hover:text-[#00D084]">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[#00D084]">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[#00D084]">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[#00D084]">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}