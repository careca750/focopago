import React, { useState } from 'react';
import { Plus, Target, Trophy, Clock, ArrowRight } from 'lucide-react';

interface Meta {
  id: number;
  titulo: string;
  descricao: string;
  prazo: string;
  recompensa: number;
  status: 'pendente' | 'concluida';
}

export function Dashboard() {
  const [metas, setMetas] = useState<Meta[]>([
    {
      id: 1,
      titulo: "Completar curso de React",
      descricao: "Finalizar todos os módulos do curso",
      prazo: "2025-04-01",
      recompensa: 500,
      status: 'pendente'
    },
    {
      id: 2,
      titulo: "Ler 2 livros",
      descricao: "Ler livros sobre produtividade",
      prazo: "2025-03-15",
      recompensa: 300,
      status: 'concluida'
    }
  ]);

  const [saldo, setSaldo] = useState(1000);

  const concluirMeta = (id: number) => {
    setMetas(metas.map(meta => {
      if (meta.id === id) {
        setSaldo(prev => prev + meta.recompensa);
        return { ...meta, status: 'concluida' };
      }
      return meta;
    }));
  };

  return (
    <div className="pt-24 min-h-screen bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Saldo</h3>
              <div className="bg-[#00D084]/10 p-2 rounded-full">
                <Trophy className="w-6 h-6 text-[#00D084]" />
              </div>
            </div>
            <p className="text-3xl font-bold text-[#00D084]">{saldo} coins</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Metas Ativas</h3>
              <div className="bg-[#00D084]/10 p-2 rounded-full">
                <Target className="w-6 h-6 text-[#00D084]" />
              </div>
            </div>
            <p className="text-3xl font-bold">{metas.filter(m => m.status === 'pendente').length}</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Concluídas</h3>
              <div className="bg-[#00D084]/10 p-2 rounded-full">
                <Clock className="w-6 h-6 text-[#00D084]" />
              </div>
            </div>
            <p className="text-3xl font-bold">{metas.filter(m => m.status === 'concluida').length}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Suas Metas</h2>
          <button className="bg-[#00D084] text-black px-4 py-2 rounded-full font-bold hover:bg-[#00D084]/90 transition-all flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Nova Meta
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metas.map(meta => (
            <div key={meta.id} className="bg-white/5 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{meta.titulo}</h3>
                  <p className="text-white/60 mb-4">{meta.descricao}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  meta.status === 'concluida' 
                    ? 'bg-[#00D084]/10 text-[#00D084]' 
                    : 'bg-white/10 text-white'
                }`}>
                  {meta.status === 'concluida' ? 'Concluída' : 'Pendente'}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-white/60">Prazo</p>
                  <p className="font-bold">{new Date(meta.prazo).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-white/60">Recompensa</p>
                  <p className="font-bold text-[#00D084]">{meta.recompensa} coins</p>
                </div>
                {meta.status === 'pendente' && (
                  <button 
                    onClick={() => concluirMeta(meta.id)}
                    className="bg-[#00D084] text-black px-4 py-2 rounded-full font-bold hover:bg-[#00D084]/90 transition-all flex items-center"
                  >
                    Concluir
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}