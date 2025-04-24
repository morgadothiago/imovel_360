'use client'
import Image from "next/image";
import RegularizacaoHero from "@/app/assets/employee-working-project-side-view.jpg";
import Header from "../components/header";

export default function Regularizacao() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Header />
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px]">
        <Image
          src={RegularizacaoHero}
          alt="Regularização de Imóveis"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Regularização de Imóveis</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Garanta a segurança jurídica do seu imóvel com nossa assessoria especializada
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-16">
        {/* Seção de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Segurança Jurídica</h3>
            <p className="text-gray-600">Garanta a documentação correta e evite problemas futuros com seu imóvel.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Agilidade</h3>
            <p className="text-gray-600">Processo simplificado e ágil, com acompanhamento em todas as etapas.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#087B82]/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#087B82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Equipe Especializada</h3>
            <p className="text-gray-600">Profissionais experientes para cuidar de todo o processo de regularização.</p>
          </div>
        </div>

        {/* Seção de Processo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#087B82] text-white flex items-center justify-center font-bold">1</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Análise Inicial</h3>
                  <p className="text-gray-600">Avaliamos a situação atual do seu imóvel e identificamos as necessidades de regularização.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#087B82] text-white flex items-center justify-center font-bold">2</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Documentação</h3>
                  <p className="text-gray-600">Preparamos e organizamos toda a documentação necessária para o processo.</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#087B82] text-white flex items-center justify-center font-bold">3</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Acompanhamento</h3>
                  <p className="text-gray-600">Realizamos todo o acompanhamento junto aos órgãos competentes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#087B82] text-white flex items-center justify-center font-bold">4</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Finalização</h3>
                  <p className="text-gray-600">Entregamos seu imóvel totalmente regularizado e com toda documentação em ordem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#087B82] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Regularize seu Imóvel Agora</h2>
          <p className="text-xl mb-8 opacity-90">Entre em contato conosco e garanta a segurança do seu patrimônio</p>
          <button className="bg-white text-[#087B82] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  );
}