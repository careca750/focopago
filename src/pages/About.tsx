import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="pt-24 min-h-screen bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Sobre o FocoPago</h1>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl mb-8">
            O FocoPago nasceu da ideia de transformar a maneira como as pessoas alcançam seus objetivos,
            combinando produtividade, gamificação e impacto social em uma única plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-white/5 p-8 rounded-2xl text-center">
            <Target className="w-12 h-12 text-[#00D084] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Nossa Missão</h3>
            <p>Transformar objetivos em conquistas reais através da tecnologia e motivação.</p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl text-center">
            <Users className="w-12 h-12 text-[#00D084] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Nossa Equipe</h3>
            <p>Profissionais apaixonados por tecnologia e desenvolvimento humano.</p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl text-center">
            <Globe className="w-12 h-12 text-[#00D084] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Nosso Impacto</h3>
            <p>Contribuindo para um mundo mais produtivo e socialmente responsável.</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Nossa História</h2>
          <div className="bg-white/5 p-8 rounded-2xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-[#00D084] font-bold mb-2">2023</h3>
                <p>Lançamento do FocoPago com foco em produtividade pessoal.</p>
              </div>
              <div>
                <h3 className="text-[#00D084] font-bold mb-2">2024</h3>
                <p>Expansão para o mercado corporativo e lançamento do FocoPago Empresas.</p>
              </div>
              <div>
                <h3 className="text-[#00D084] font-bold mb-2">2025</h3>
                <p>Integração com IA e lançamento do programa de impacto social.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}