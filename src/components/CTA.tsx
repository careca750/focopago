import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <div className="py-20 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#00D084] to-[#00A067] rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Pronto para Transformar seus Objetivos em Conquistas?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já estão usando o FocoPago para 
            alcançar suas metas e fazer a diferença no mundo.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link 
              to="/cadastro"
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-black/90 transition-all inline-flex items-center justify-center"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/planos"
              className="bg-white/20 text-black px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all"
            >
              Ver Planos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}