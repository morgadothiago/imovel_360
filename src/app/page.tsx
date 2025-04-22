'use client'
import Image from "next/image";
import Header from "./components/header";
import { useState, useEffect } from "react";
import RegulamentaImg from "@/app/assets/employee-working-project-side-view.jpg";
import Topolog from "@/app/assets/topo.png";
import moveisPlanejadoimg from "@/app/assets/moveis.png";
import obras from "@/app/assets/obra.png";
import avaliacao from "@/app/assets/avaliacao.png";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: RegulamentaImg,
      title: "Encontre seu Imóvel Ideal",
    },
    {
      image: Topolog,
      title: "Levantamento Topográfico",
    },
    {
      image: avaliacao,
      title: "Avaliação de Imoveis",
    },
    {
      image: moveisPlanejadoimg,
      title: "Móveis Planejados",
    },
    {
      image: obras,
      title: "Acompanhamento de obras",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="">
      <Header />
      
      {/* Carousel Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
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
                  <div className="text-center text-white transform transition-all duration-700 ease-out">
                    <h2 className="text-4xl font-bold mb-4 animate-fadeIn">{slide.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>


      <div className="">
          <h1>Regularização de Imóveis</h1>

          <p>Regularizar um imóvel é assegurar que ele cumpra todas as exigências legais, evitando multas, transtornos e valorizando seu patrimônio. Seja para vender, financiar ou simplesmente ter a tranquilidade de um documento em dia, a regularização é essencial para todo proprietário consciente.

Com a Imóvel360, você conta com um serviço especializado em regularização imobiliária, desde a análise de documentos até a emissão dos registros necessários. Nossa equipe garante que seu imóvel, urbano ou rural, esteja 100% dentro da lei, proporcionando segurança jurídica e valorização no mercado.

Invista na legalidade do seu imóvel e evite preocupações no futuro. Conte com a Imóvel360 para regularizar sua propriedade com eficiência e confiança! 🏡✅</p>
        
      </div>    


    </div>
  );
}
