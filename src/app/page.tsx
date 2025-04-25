'use client'
import Image from "next/image";

import { useState, useEffect } from "react";
import RegulamentaImg from "@/app/assets/employee-working-project-side-view.jpg";
import Topolog from "@/app/assets/topo.png";
import moveisPlanejadoimg from "@/app/assets/moveis.png";
import obras from "@/app/assets/obra.png";
import avaliacao from "@/app/assets/avaliacao.png";
import projetoarquitetonico from '@/app/assets/projetoarquitetonico.jpg'


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: RegulamentaImg,
      title: "Regularização de Imóveis",
      description: "Regularize seu imóvel com segurança e tranquilidade"
    },
    {
      image: Topolog,
      title: "Levantamento Topográfico",
      description: "Precisão e qualidade em cada medição"
    },
    {
      image: avaliacao,
      title: "Avaliação de Imóveis",
      description: "Avaliações profissionais e detalhadas"
    },
    {
      image: moveisPlanejadoimg,
      title: "Móveis Planejados",
      description: "Design personalizado para seu espaço"
    },
    {
      image: obras,
      title: "Acompanhamento de Obras",
      description: "Supervisão especializada do início ao fim"
    },
    {
      image: projetoarquitetonico,
      title: "Elaboração de Projeto Executivo",
      description: "Transforme suas ideias em projetos únicos com nossos  arquitetos"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
     
      
      {/* Carousel Section */}
      <div className="flex justify-center items-center w-full">
        <div className="relative w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] h-[500px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] overflow-hidden">
          <div className="flex h-full transition-transform duration-1000 ease-in-out" 
               style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex items-center justify-center">
                    <div className="text-center text-white transform transition-all duration-700 ease-out px-4">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fadeIn">{slide.title}</h2>
                      <p className="text-lg md:text-xl lg:text-2xl animate-fadeIn opacity-90">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botões de Navegação */}
          <button 
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all duration-300 group z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6 group-hover:scale-110 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all duration-300 group z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6 group-hover:scale-110 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-white scale-125 shadow-lg" 
                    : "bg-white/50 hover:bg-white/70"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-[#087B82] text-3xl md:text-4xl font-bold mb-12 text-center relative">
          Nossos Serviços
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#087B82] mt-4"></span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {slides.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:shadow-xl transition-all duration-300 border-l-4 border-[#087B82] group h-full">
              <a href={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="block h-full flex flex-col">
                <h2 className="text-xl font-semibold text-[#087B82] mb-4 group-hover:text-[#065c61] transition-colors text-center">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4 text-center flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center text-[#087B82] group-hover:text-[#065c61] justify-center mt-auto">
                  <span>Saiba mais</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Formulário de Contato */}
      <div className="mt-20 mb-20 max-w-2xl mx-auto px-4">
        <div className="bg-gradient-to-br from-white to-[#D4CCBF]/10 rounded-2xl shadow-lg p-8 relative overflow-hidden">
          {/* Elemento decorativo */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#087B82]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#087B82]/5 rounded-full blur-3xl"></div>
          
          <h2 className="text-2xl font-bold text-[#087B82] mb-2 text-center">Entre em Contato</h2>
          <p className="text-gray-600 text-center mb-8">Estamos prontos para atender você</p>
          
          <form className="space-y-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-[#087B82]">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#087B82] focus:border-transparent transition-all bg-white/50 hover:bg-white group-hover:border-[#087B82]/50"
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-[#087B82]">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#087B82] focus:border-transparent transition-all bg-white/50 hover:bg-white group-hover:border-[#087B82]/50"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-[#087B82]">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#087B82] focus:border-transparent transition-all bg-white/50 hover:bg-white group-hover:border-[#087B82]/50"
                placeholder="(XX) XXXXX-XXXX"
                required
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-[#087B82]">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#087B82] focus:border-transparent transition-all bg-white/50 hover:bg-white group-hover:border-[#087B82]/50 resize-none"
                placeholder="Como podemos ajudar você?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#087B82] text-white py-4 px-6 rounded-xl hover:bg-[#065c61] transition-all transform hover:scale-[1.02] active:scale-[0.98] font-medium shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Enviar Mensagem</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Botão WhatsApp Flutuante */}
      <a
        href="https://wa.me/5511920052992" // Substitua pelo seu número do WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Contato via WhatsApp"
    >
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#087B82] text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Fale conosco no WhatsApp
        </div>
        <svg 
          className="w-6 h-6"
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
