import React from "react";
import Header from "../components/header";

import TopografigaImg from "@/app/assets/Frame 3-3.png";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <Header />

      <main className="flex flex-col items-center ">
        <div className="relative w-full max-w-1xl overflow-hidden ">
          <div className="bg-black">
            <Image
              src={TopografigaImg}
              alt="regulamentação"
              className="object-cover w-full h-94 md:h-80 opacity-50"
            />
          </div>
          <div className="bg-white sm:p-6 rounded-lg  md:w-[80%] p-3">
            <h1 className="text-[#087B82] text-2xl md:text-3xl font-bold mb-4">
              Regularização de Imóveis
            </h1>
            <div className="px-4">
              <p className="text-justify mb-6">
                Regularizar um imóvel é assegurar que ele cumpra todas as
                exigências legais, evitando multas, transtornos e valorizando
                seu patrimônio. Seja para vender, financiar ou simplesmente ter
                a tranquilidade de um documento em dia, a regularização é
                essencial para todo proprietário consciente.
              </p>
              <p className="text-justify mb-6">
                Com a Imóvel360, você conta com um serviço especializado em
                regularização imobiliária, desde a análise de documentos até a
                emissão dos registros necessários. Nossa equipe garante que seu
                imóvel, urbano ou rural, esteja 100% dentro da lei,
                proporcionando segurança jurídica e valorização no mercado.
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
