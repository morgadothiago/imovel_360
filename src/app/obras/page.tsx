'use client'
import React from "react";
import Header from "../components/header";
import ObraImg from "@/app/assets/obra.png";
import Image from "next/image";

export default function Obras() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px] w-full">
        <Image
          src={ObraImg}
          alt="Acompanhamento de Obras"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Acompanhamento de Obras</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Supervisão especializada para garantir a qualidade e segurança da sua obra
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          {/* Introdução */}
          <div className="mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              O acompanhamento de obras vai além de uma simples fiscalização das atividades. 
              Na realidade, ele desempenha um papel essencial para evitar imprevistos durante 
              a execução do projeto, assegurando que o progresso esteja de acordo com o 
              cronograma e o orçamento definidos no planejamento.
            </p>
          </div>

          {/* Processo */}
          <div className="mb-12">
            <h2 className="text-[#087B82] text-2xl font-bold mb-6">Como Funciona</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700">
                Com o projeto e as documentações em mãos solicitamos a devida RRT na 
                prefeitura e iniciamos a supervisão em obra.
              </p>
            </div>
          </div>

          {/* Cards de Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Previsibilidade</h3>
              <p className="text-gray-600">O acompanhamento permite identificar e reduzir riscos antecipadamente, mantendo o projeto dentro do prazo e do custo previstos.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Qualidade</h3>
              <p className="text-gray-600">Um monitoramento detalhado garante a manutenção dos padrões de qualidade, supervisionando a mão de obra, os materiais e as técnicas utilizadas.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Gestão de Recursos</h3>
              <p className="text-gray-600">O acompanhamento contínuo permite um uso mais eficiente de materiais e mão de obra, reduzindo desperdícios e aumentando a produtividade.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Segurança</h3>
              <p className="text-gray-600">Com checklists baseados em normas regulamentadoras, garantimos que o canteiro de obras esteja em conformidade, protegendo os trabalhadores.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#087B82] rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para começar sua obra?</h2>
            <p className="text-lg mb-6">
              Conte com nossa experiência para garantir que sua obra seja executada com 
              excelência, dentro do prazo e do orçamento.
            </p>
            <button className="bg-white text-[#087B82] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
