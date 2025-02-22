import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Como Aumentar sua Produtividade em 2025',
    excerpt: 'Descubra as melhores práticas e ferramentas para maximizar seus resultados...',
    author: 'Time FocoPago',
    date: '15 Mar 2025',
    category: 'Produtividade',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Gamificação no Ambiente Corporativo',
    excerpt: 'Como empresas estão usando jogos para engajar suas equipes...',
    author: 'Time FocoPago',
    date: '12 Mar 2025',
    category: 'Empresas',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'O Poder das Metas Compartilhadas',
    excerpt: 'Por que definir objetivos em grupo aumenta as chances de sucesso...',
    author: 'Time FocoPago',
    date: '10 Mar 2025',
    category: 'Metas',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  }
];

export function Blog() {
  return (
    <div className="pt-24 min-h-screen bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog FocoPago</h1>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
              alt="Featured post"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
              <div className="absolute bottom-0 p-8">
                <span className="bg-[#00D084] text-black px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                  Destaque
                </span>
                <h2 className="text-3xl font-bold mb-4">
                  Inteligência Artificial e Produtividade: O Futuro do Trabalho
                </h2>
                <p className="text-white/80 mb-4">
                  Como a IA está revolucionando a forma como alcançamos nossos objetivos...
                </p>
                <div className="flex items-center text-sm">
                  <span>Por Time FocoPago</span>
                  <span className="mx-2">•</span>
                  <span>18 Mar 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white/5 rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="bg-[#00D084]/10 text-[#00D084] px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-white/80 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-white/60">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}