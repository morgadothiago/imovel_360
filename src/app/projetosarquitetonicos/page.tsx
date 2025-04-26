'use client'
import React from "react";
import Image from "next/image";
import arquitetonicoImg from "@/app/assets/projetoarquitetonico.jpg";

export default function ProjetoArquitetonico() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px] w-full">
        <Image
          src={arquitetonicoImg}
          alt="Projeto Arquitetônico"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Elaboração Projetos Arquitetônicos</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Transforme suas ideias em projetos únicos e funcionais
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          {/* Seção de Introdução */}
          <div className="mb-12">
            <h2 className="text-[#087B82] text-3xl font-bold mb-6">Por que investir em um Projeto Arquitetônico?</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Um projeto arquitetônico bem elaborado é o primeiro passo para transformar seu sonho em realidade. 
              Nossos especializada desenvolve projetos personalizados que combinam estética, funcionalidade 
              e sustentabilidade, garantindo que cada detalhe seja pensado para atender suas necessidades específicas 
              e otimizar o uso do espaço disponível.
            </p>
          </div>

          {/* Etapas do Projeto */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Como desenvolvemos seu projeto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-[#087B82] text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h4 className="text-xl font-semibold">Briefing Inicial</h4>
                </div>
                <p className="text-gray-600">Reunião para entender suas necessidades, preferências e orçamento.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-[#087B82] text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h4 className="text-xl font-semibold">Estudo Preliminar</h4>
                </div>
                <p className="text-gray-600">Desenvolvimento do conceito inicial e primeiros esboços do projeto.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-[#087B82] text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h4 className="text-xl font-semibold">Anteprojeto</h4>
                </div>
                <p className="text-gray-600">Refinamento do projeto com detalhamentos técnicos e especificações.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-[#087B82] text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h4 className="text-xl font-semibold">Projeto Executivo</h4>
                </div>
                <p className="text-gray-600">Documentação completa para execução da obra com todos os detalhes necessários.</p>
              </div>
            </div>
          </div>

          {/* Diferenciais */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nossos Diferenciais</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Projetos Personalizados</h3>
                <p className="text-gray-600">Cada projeto é único, desenvolvido de acordo com seu estilo e necessidades.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustentabilidade</h3>
                <p className="text-gray-600">Soluções eco-friendly e eficiência energética em todos os projetos.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Viabilidade Econômica</h3>
                <p className="text-gray-600">Otimização de recursos e soluções dentro do seu orçamento.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#087B82] rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Vamos criar seu projeto?</h2>
            <p className="text-lg mb-6">
              Transforme seu sonho em realidade com a Imóvel360. 
              Nossa equipe está pronta para desenvolver um projeto único que atenda todas as suas expectativas. 🏠✨
            </p>
            <button className="bg-white text-[#087B82] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform duration-300">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
