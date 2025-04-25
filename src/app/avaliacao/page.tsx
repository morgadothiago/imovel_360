'use client'
import React from "react";

import Image from "next/image";
import avaliacao from "@/app/assets/avaliacao.png";

export default function AvaliacaoPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px] w-full">
        <Image
          src={avaliacao}
          alt="Avaliação de Imóveis"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Avaliação de Imóveis</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Avaliações profissionais e precisas para seu imóvel
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          {/* Introdução */}
          <div className="mb-12">
            <h2 className="text-[#087B82] text-3xl font-bold mb-6">Por que fazer uma Avaliação Profissional?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Uma avaliação profissional é essencial em diversas situações, garantindo segurança
              e precisão nas suas decisões imobiliárias.
            </p>
          </div>

          {/* Grid de Situações */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Venda ou Compra</h3>
              <p className="text-gray-600">Para definir um preço justo e transparente no mercado imobiliário.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Financiamento</h3>
              <p className="text-gray-600">Necessário para determinar o valor do empréstimo bancário.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Investimentos</h3>
              <p className="text-gray-600">Ajuda a tomar decisões estratégicas sobre compra, venda ou aluguel.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Divisão de Bens</h3>
              <p className="text-gray-600">Importante em casos de herança, divórcio ou sociedade.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#087B82] rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Faça sua Avaliação Agora</h2>
            <p className="text-lg mb-6">
              Conte com a Imóvel360 para uma avaliação profissional e precisa do seu imóvel. 
              Garanta a segurança nas suas decisões imobiliárias! 🏡✨
            </p>
            <button className="bg-white text-[#087B82] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Avaliação
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
