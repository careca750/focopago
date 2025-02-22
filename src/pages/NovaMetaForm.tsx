import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, DollarSign, Target, ArrowLeft } from 'lucide-react';

export function NovaMetaForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    prazo: '',
    recompensa: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para salvar a meta
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-24 min-h-screen bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center text-white/60 hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </button>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Nova Meta</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Título</label>
              <div className="relative">
                <Target className="absolute left-4 top-3 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 focus:outline-none focus:border-[#00D084]"
                  placeholder="Digite o título da sua meta"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Descrição</label>
              <textarea
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-[#00D084] min-h-[100px]"
                placeholder="Descreva sua meta em detalhes"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Prazo</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-3 w-5 h-5 text-white/40" />
                <input
                  type="date"
                  name="prazo"
                  value={formData.prazo}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 focus:outline-none focus:border-[#00D084]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Recompensa (coins)</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-3 w-5 h-5 text-white/40" />
                <input
                  type="number"
                  name="recompensa"
                  value={formData.recompensa}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 focus:outline-none focus:border-[#00D084]"
                  placeholder="100"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#00D084] text-black px-6 py-4 rounded-full font-bold hover:bg-[#00D084]/90 transition-all"
            >
              Criar Meta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}