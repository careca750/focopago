import React from 'react';
import { MessageCircle, Mail, Book } from 'lucide-react';

export function Help() {
  return (
    <div className="pt-24 min-h-screen bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Central de Ajuda</h1>

        <div className="max-w-4xl mx-auto">
          {/* Search */}
          <div className="mb-12">
            <div className="bg-white/5 p-4 rounded-full">
              <input
                type="text"
                placeholder="Como podemos ajudar?"
                className="w-full bg-transparent text-white placeholder-white/60 focus:outline-none"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a href="#" className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all">
              <MessageCircle className="w-8 h-8 text-[#00D084] mb-4" />
              <h3 className="font-bold mb-2">Chat ao Vivo</h3>
              <p className="text-sm text-white/80">Fale com nossa equipe em tempo real</p>
            </a>

            <a href="#" className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all">
              <Mail className="w-8 h-8 text-[#00D084] mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-white/80">Envie sua dúvida para nossa equipe</p>
            </a>

            <a href="#" className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all">
              <Book className="w-8 h-8 text-[#00D084] mb-4" />
              <h3 className="font-bold mb-2">Base de Conhecimento</h3>
              <p className="text-sm text-white/80">Artigos e tutoriais detalhados</p>
            </a>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
            
            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="font-bold mb-2">Como funciona o sistema de coins?</h3>
              <p className="text-white/80">Os coins são a moeda do FocoPago, utilizados para definir recompensas e metas...</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="font-bold mb-2">Como recebo minhas recompensas?</h3>
              <p className="text-white/80">As recompensas são creditadas automaticamente na sua carteira digital...</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="font-bold mb-2">Posso usar o FocoPago na minha empresa?</h3>
              <p className="text-white/80">Sim! Temos planos específicos para empresas com recursos exclusivos...</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="font-bold mb-2">Como funciona o programa de impacto social?</h3>
              <p className="text-white/80">Parte das nossas taxas é direcionada para projetos sociais selecionados...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}