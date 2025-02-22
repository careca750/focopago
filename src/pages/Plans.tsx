import React from 'react';

export function Plans() {
  return (
    <div className="pt-24 min-h-screen bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Planos e Preços</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Gratuito</h2>
            <p className="text-[#00D084] text-3xl font-bold mb-6">R$ 0</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-[#00D084] mr-2">✓</span>
                Metas básicas
              </li>
              <li className="flex items-center">
                <span className="text-[#00D084] mr-2">✓</span>
                Recompensas limitadas
              </li>
              <li className="flex items-center">
                <span className="text-[#00D084] mr-2">✓</span>
                Acesso à comunidade
              </li>
            </ul>
            <button className="w-full bg-white/10 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-all">
              Começar Grátis
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-[#00D084] to-[#00A067] rounded-2xl p-8 transform scale-105">
            <h2 className="text-2xl font-bold mb-4">Pro</h2>
            <p className="text-black text-3xl font-bold mb-6">R$ 29,90/mês</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-black mr-2">✓</span>
                Todas as features básicas
              </li>
              <li className="flex items-center">
                <span className="text-black mr-2">✓</span>
                Metas ilimitadas
              </li>
              <li className="flex items-center">
                <span className="text-black mr-2">✓</span>
                Assistente AI avançado
              </li>
              <li className="flex items-center">
                <span className="text-black mr-2">✓</span>
                Relatórios detalhados
              </li>
            </ul>
            <button className="w-full bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-black/90 transition-all">
              Assinar Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
            <p className="text-[#00D084] text-3xl font-bold mb-6">Personalizado</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-[#00D084] mr-2">✓</span>
                Todas as features Pro
              </li>
              <li className="flex items-center">
                <span className="text-[#00D084] mr-2">✓</span>
                Suporte dedicado
              </li>
              <li className="flex items-center">
                <span className="text-[#00D084] mr-2">✓</span>
                API personalizada
              </li>
              <li className="flex items-center">
                <span className="text-[#00D084] mr-2">✓</span>
                SLA garantido
              </li>
            </ul>
            <button className="w-full bg-white/10 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-all">
              Falar com Vendas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}