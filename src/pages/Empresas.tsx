import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Brain, Wallet, ArrowRight, CheckCircle } from 'lucide-react';

export function Empresas() {
  const beneficios = [
    'Sistema de recompensas personalizável',
    'Gamificação avançada para equipes',
    'Automação completa com IA',
    'Relatórios e insights detalhados',
    'Suporte dedicado 24/7',
    'API personalizada para integração'
  ];

  const recursos = [
    {
      icon: Users,
      titulo: 'Gestão de Equipes',
      descricao: 'Organize times, defina metas coletivas e acompanhe o progresso em tempo real.'
    },
    {
      icon: Target,
      titulo: 'Metas Corporativas',
      descricao: 'Alinhe objetivos individuais com as metas estratégicas da empresa.'
    },
    {
      icon: Brain,
      titulo: 'IA Avançada',
      descricao: 'Recomendações personalizadas e automação de processos com inteligência artificial.'
    },
    {
      icon: Wallet,
      titulo: 'Sistema de Recompensas',
      descricao: 'Programa de incentivos flexível e adaptável à cultura da sua empresa.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            FocoPago para Empresas
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Transforme a produtividade da sua equipe com um sistema de recompensas 
            gamificado e automatizado.
          </p>
          <Link 
            to="/cadastro-empresa"
            className="inline-flex items-center bg-[#00D084] text-black px-8 py-4 rounded-full font-bold hover:bg-[#00D084]/90 transition-all"
          >
            Começar Agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Recursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {recursos.map((recurso, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6">
              <div className="bg-[#00D084]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <recurso.icon className="w-6 h-6 text-[#00D084]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{recurso.titulo}</h3>
              <p className="text-white/60">{recurso.descricao}</p>
            </div>
          ))}
        </div>

        {/* Benefícios e Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Benefícios para sua empresa
            </h2>
            <ul className="space-y-4">
              {beneficios.map((beneficio, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#00D084] mr-3" />
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-2xl font-bold mb-2">+70%</p>
              <p className="text-white/60">Aumento em produtividade</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-2xl font-bold mb-2">-30%</p>
              <p className="text-white/60">Redução em atrasos</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-2xl font-bold mb-2">95%</p>
              <p className="text-white/60">Satisfação da equipe</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-2xl font-bold mb-2">+50%</p>
              <p className="text-white/60">Engajamento</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-[#00D084] to-[#00A067] rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Pronto para Transformar sua Empresa?
          </h2>
          <p className="text-black/80 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já estão usando o FocoPago para 
            aumentar a produtividade e engajamento de suas equipes.
          </p>
          <Link 
            to="/cadastro-empresa"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-black/90 transition-all"
          >
            Agendar Demonstração
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}