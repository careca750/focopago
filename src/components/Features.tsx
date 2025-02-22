import React from 'react';
import { Target, Brain, Wallet, Users } from 'lucide-react';

export function Features() {
  return (
    <div className="py-20 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Como o FocoPago Funciona?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-[#00D084]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-8 h-8 text-[#00D084]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Adicione Coins</h3>
            <p className="text-white/60">
              Compre pacotes e use para definir desafios pessoais ou profissionais
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#00D084]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-[#00D084]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Crie Metas</h3>
            <p className="text-white/60">
              Configure tarefas e defina recompensas para cada meta cumprida
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#00D084]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-[#00D084]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Receba Apoio</h3>
            <p className="text-white/60">
              Empresas ou amigos podem investir em suas metas
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#00D084]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-[#00D084]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Conclua e Ganhe</h3>
            <p className="text-white/60">
              Complete seus desafios e receba mais coins para continuar crescendo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}