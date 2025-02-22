import React from 'react';
import { Link } from 'react-router-dom';
import { Star, DollarSign, Users, Target, Globe } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-24 pb-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <div className="flex items-center bg-[#00D084]/10 rounded-full px-4 py-2 max-w-fit mx-auto mb-8">
          <Star className="w-4 h-4 text-[#00D084] mr-2" />
          <span className="text-sm">4.9/5 de avaliação média dos usuários</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 max-w-4xl mx-auto">
          Invista em você e no mundo
        </h1>

        <p className="text-xl text-center text-white/80 mb-12 max-w-2xl mx-auto">
          FocoPago une produtividade, gestão financeira e impacto social em uma plataforma gamificada 
          que motiva você a cumprir suas metas e transformar seus objetivos em conquistas reais.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
          <Link 
            to="/cadastro"
            className="bg-[#00D084] text-black px-8 py-4 rounded-full font-bold hover:bg-[#00D084]/90 transition-all text-center"
          >
            Comece Grátis
          </Link>
          <Link 
            to="/como-funciona"
            className="bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-center"
          >
            Como Funciona
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <DollarSign className="w-8 h-8 text-[#00D084] mx-auto mb-2" />
            <p className="text-2xl font-bold mb-1">R$ 1M+</p>
            <p className="text-sm text-white/60">Metas alcançadas</p>
          </div>
          <div className="text-center">
            <Users className="w-8 h-8 text-[#00D084] mx-auto mb-2" />
            <p className="text-2xl font-bold mb-1">50k+</p>
            <p className="text-sm text-white/60">Usuários ativos</p>
          </div>
          <div className="text-center">
            <Target className="w-8 h-8 text-[#00D084] mx-auto mb-2" />
            <p className="text-2xl font-bold mb-1">95%</p>
            <p className="text-sm text-white/60">Taxa de sucesso</p>
          </div>
          <div className="text-center">
            <Globe className="w-8 h-8 text-[#00D084] mx-auto mb-2" />
            <p className="text-2xl font-bold mb-1">R$ 100k+</p>
            <p className="text-sm text-white/60">Impacto social</p>
          </div>
        </div>
      </div>
    </div>
  );
}