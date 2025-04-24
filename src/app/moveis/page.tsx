'use client'
import React from "react";
import Header from "../components/header";
import MoveisImg from "@/app/assets/moveis.png";
import Image from "next/image";

export default function MoveisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px] w-full">
        <Image
          src={MoveisImg}
          alt="Móveis Planejados"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Móveis Planejados</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Design personalizado para transformar seus ambientes
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          {/* Introdução */}
          <div className="mb-12">
            <h2 className="text-[#087B82] text-3xl font-bold mb-6">Por que escolher Móveis Planejados?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Os móveis planejados são a solução ideal para quem busca otimizar espaço, 
              combinar funcionalidade com estilo e transformar ambientes com elegância. 
              Projetados sob medida, eles oferecem inúmeras vantagens, desde melhor 
              aproveitamento de áreas até um visual sofisticado e harmonioso.
            </p>
          </div>

          {/* Cards de Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Otimização de Espaço</h3>
              <p className="text-gray-600">Aproveitamento máximo de cada centímetro do seu ambiente.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Design Personalizado</h3>
              <p className="text-gray-600">Móveis que refletem seu estilo e atendem suas necessidades específicas.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Qualidade Superior</h3>
              <p className="text-gray-600">Materiais selecionados e acabamento impecável para maior durabilidade.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Funcionalidade</h3>
              <p className="text-gray-600">Soluções inteligentes que facilitam seu dia a dia.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#087B82] rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Transforme seus ambientes</h2>
            <p className="text-lg mb-6">
              Conte com a Imóvel360 para criar móveis planejados que combinam 
              perfeitamente com seu espaço e estilo de vida. 🏠✨
            </p>
            <button className="bg-white text-[#087B82] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Projeto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
