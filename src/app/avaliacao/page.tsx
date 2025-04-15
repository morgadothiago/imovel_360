import React from "react";
import Header from "../components/header";
import Image from "next/image";

import TopografigaImg from "@/app/assets/Frame 3-1.png";

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
              Avaliação de Imóveis
            </h1>
            <div className="px-4">
              <p className="text-justify mb-10">
                Uma avaliação profissional é essencial em diversas situações:
              </p>

              <ul className="list-none pl-5 mb-10">
                <li>
                  <span className="text-green-500">✔️</span> Venda ou Compra –
                  Para definir um preço justo e transparente no mercado
                  imobiliário.
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Financiamento –
                  Necessário para determinar o valor do empréstimo bancário.
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Investimentos –
                  Ajuda a tomar decisões estratégicas sobre compra, venda ou
                  aluguel.
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Divisão de Bens –
                  Importante em casos de herança, divórcio ou sociedade.
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Indenizações –
                  Define o valor correto em casos de desapropriação ou danos.
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Questões Jurídicas
                  – Base para processos judiciais, inventários e declarações
                  patrimoniais.
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Atualização
                  Financeira – Mantém seu patrimônio atualizado para
                  planejamento financeiro.
                </li>
              </ul>

              <p className="text-justify mb-10">
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
