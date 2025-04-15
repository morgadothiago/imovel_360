import React from "react";
import Header from "../components/header";

import TopografigaImg from "@/app/assets/Frame 3.png";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <Header />

      <main className="flex flex-col items-center ">
        <div className="relative w-full max-w-1xl overflow-hidden ">
          <div className="">
            <Image
              src={TopografigaImg}
              alt="regulamentação"
              className="object-cover w-full h-94 md:h-80 "
            />
          </div>
          <div className="bg-white sm:p-6 rounded-lg  md:w-[80%] p-3">
            <h1 className="text-[#087B82] text-2xl md:text-3xl font-bold mb-4">
              Levantamento Topográfico
            </h1>
            <div className="px-4">
              <p className="text-justify mb-6">
                Para garantir a regularização segura de um terreno e a
                viabilização adequada de uma construção, é fundamental contar
                com um levantamento topográfico preciso e personalizado,
                atendendo às especificações do projeto. Esse serviço fornece
                dados planimétricos (medidas em planta) e altimétricos (níveis
                de elevação), essenciais para arquitetos, engenheiros e outros
                profissionais construírem com exatidão e segurança.
              </p>
              <p className="text-justify mb-6">
                <ul className="list-none pl-5 mb-6">
                  <li>
                    ✅ Evita invasão de limites – Previne conflitos com vizinhos
                    e problemas judiciais.
                  </li>
                  <li>
                    ✅ Garante um terreno nivelado – Assegura uma base estável
                    para a construção.
                  </li>
                  <li>
                    ✅ Custo-benefício vantajoso – Investimento que evita
                    retrabalhos, multas e prejuízos futuros.
                  </li>
                </ul>
              </p>
              <p className="text-justify mb-6">
                Não deixe para depois! Conte com a Imóvel360 e fique livre de
                preocupações. Um levantamento topográfico bem executado é a base
                para um projeto seguro, legalizado e livre de imprevistos. 🏡📐
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
