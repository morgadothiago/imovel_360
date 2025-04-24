'use client'
import React from "react";
import Header from "../components/header";
import TopografigaImg from "@/app/assets/topo.png";
import Image from "next/image";

export default function Topografia() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px] w-full">
        <Image
          src={TopografigaImg}
          alt="Levantamento Topográfico"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Levantamento Topográfico</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Precisão e qualidade em cada medição do seu terreno
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          {/* Seção de Introdução */}
          <div className="mb-12">
            <h2 className="text-[#087B82] text-3xl font-bold mb-6">Por que fazer um Levantamento Topográfico?</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Para garantir a regularização segura de um terreno e a viabilização adequada de uma construção, 
              é fundamental contar com um levantamento topográfico preciso e personalizado, atendendo às 
              especificações do projeto. Esse serviço fornece dados planimétricos (medidas em planta) e 
              altimétricos (níveis de elevação), essenciais para arquitetos, engenheiros e outros profissionais 
              construírem com exatidão e segurança.
            </p>
          </div>

          {/* Benefícios em Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Evita Invasão de Limites</h3>
              <p className="text-gray-600">Previne conflitos com vizinhos e problemas judiciais.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Terreno Nivelado</h3>
              <p className="text-gray-600">Assegura uma base estável para a construção.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Custo-Benefício</h3>
              <p className="text-gray-600">Investimento que evita retrabalhos e prejuízos futuros.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#087B82] rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para começar?</h2>
            <p className="text-lg mb-6">
              Não deixe para depois! Conte com a Imóvel360 e fique livre de preocupações. 
              Um levantamento topográfico bem executado é a base para um projeto seguro, 
              legalizado e livre de imprevistos. 🏡📐
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
