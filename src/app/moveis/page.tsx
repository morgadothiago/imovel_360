import React from "react";
import Header from "../components/header";

import MoveisImg from "@/app/assets/moveis.png";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <Header />

      <main className="flex flex-col items-center ">
        <div className="relative w-full max-w-1xl overflow-hidden ">
          <div className="">
            <Image
              src={MoveisImg}
              alt="regulamentação"
              className="object-cover w-full h-94 md:h-80 "
            />
          </div>
          <div className="bg-white sm:p-6 rounded-lg  md:w-[80%] p-3">
            <h1 className="text-[#087B82] text-2xl md:text-3xl font-bold mb-4">
              Móveis Planejados: Conheça as Vantagens de um Ambiente Personalizado
            </h1>
            <div className="px-4">
              <p className="text-justify mb-6">
                Os móveis planejados são a solução ideal para quem busca otimizar espaço, combinar funcionalidade com estilo e transformar ambientes com elegância. Projetados sob medida, eles oferecem inúmeras vantagens, desde melhor aproveitamento de áreas até um visual sofisticado e harmonioso.
              </p>
              <p className="text-justify mb-6">
              Principais Benefícios dos Móveis Planejados
              </p>
              <p className="text-justify mb-6">
                Invista na legalidade do seu imóvel e evite preocupações no
                futuro. Conte com a Imóvel360 para regularizar sua propriedade
                com eficiência e confiança! 🏡✅
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
