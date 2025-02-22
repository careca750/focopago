import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Plans } from './pages/Plans';
import { About } from './pages/About';
import { Help } from './pages/Help';
import { Blog } from './pages/Blog';
import { Dashboard } from './pages/Dashboard';
import { NovaMetaForm } from './pages/NovaMetaForm';
import { Footer } from './components/Footer';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Empresas } from './pages/Empresas';

function App() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white font-['Poppins']">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Plans />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/ajuda" element={<Help />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nova-meta" element={<NovaMetaForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/empresas" element={<Empresas />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;