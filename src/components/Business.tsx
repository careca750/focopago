import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export function Business() {
  const benefits = [
    'Sistema de recompensas personalizável',
    'Gamificação avançada para equipes',
    'Automação completa com IA',
    'Relatórios e insights detalhados',
    'Suporte dedicado 24/7',
    'API personalizada para integração'
  ];

  return (
    <div className="py-20 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              FocoPago para Empresas
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Transforme a produtividade da sua equipe com um sistema de recompensas 
              gamificado e automatizado.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#00D084] mr-3" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/empresas"
              className="inline-flex items-center bg-[#00D084] text-black px-8 py-4 rounded-full font-bold hover:bg-[#00D084]/90 transition-all"
            >
              Conhecer FocoPago Empresas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="bg-white/5 rounded-2xl p-8">
            <div className="bg-[#00D084]/10 rounded-xl p-6 mb-6">
              <p className="text-2xl font-bold mb-2">+70%</p>
              <p className="text-white/60">Aumento médio em produtividade</p>
            </div>

            <div className="bg-[#00D084]/10 rounded-xl p-6 mb-6">
              <p className="text-2xl font-bold mb-2">-30%</p>
              <p className="text-white/60">Redução em atrasos de projetos</p>
            </div>

            <div className="bg-[#00D084]/10 rounded-xl p-6">
              <p className="text-2xl font-bold mb-2">95%</p>
              <p className="text-white/60">Satisfação dos colaboradores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}