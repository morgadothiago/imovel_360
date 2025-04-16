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
          <div className="">
            <Image
              src={TopografigaImg}
              alt="regulamentação"
              className="object-cover w-full h-94 md:h-80 "
            />
          </div>
          <div className="bg-white sm:p-6 rounded-lg  md:w-[80%] p-3">
            <h1 className="text-[#087B82] text-2xl md:text-3xl font-bold mb-4">
              Acompanhamento de obra
            </h1>
            <div className="px-4 flex flex-col gap-6 sm:gap-8 md:gap-10">
              <p className="text-justify mb-4 sm:mb-6 font-semibold text-base sm:text-lg">
                O acompanhamento de obras vai além de uma simples fiscalização
                das atividades. Na realidade, ele desempenha um papel essencial
                para evitar imprevistos durante a execução do projeto,
                assegurando que o progresso esteja de acordo com o cronograma e
                o orçamento definidos no planejamento.
              </p>
              <p className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
                Com o projeto e as documentações em mãos solicitamos a devida
                RRT na prefeitura e iniciamos a supervisão em obra. Veja os
                benefícios:
              </p>
              <p className="font-semibold mb-2">
                Previsibilidade:{" "}
                <span className="font-normal">
                  O acompanhamento permite identificar e reduzir riscos
                  antecipadamente, mantendo o projeto dentro do prazo e do custo
                  previstos.
                </span>
              </p>
              <p className="font-semibold mb-2">
                Qualidade:{" "}
                <span className="font-normal">
                  Um monitoramento detalhado garante a manutenção dos padrões de
                  qualidade, supervisionando a mão de obra, os materiais e as
                  técnicas utilizadas, de modo que estejam alinhados com as
                  especificações do projeto. A qualidade não só assegura a
                  satisfação do cliente, mas também evita retrabalhos,
                  economizando tempo e recursos.
                </span>
              </p>
              <p className="font-semibold mb-2">
                Gestão otimizada de recursos:{" "}
                <span className="font-normal">
                  O acompanhamento contínuo permite um uso mais eficiente de
                  materiais e mão de obra, reduzindo desperdícios e aumentando a
                  produtividade.
                </span>
              </p>
              <p className="font-semibold mb-2">
                Segurança:{" "}
                <span className="font-normal">
                  Com checklists baseados em normas regulamentadoras e leis de
                  segurança do trabalho, as equipes de acompanhamento garantem
                  que o canteiro de obras esteja em conformidade, protegendo os
                  trabalhadores e prevenindo acidentes.
                </span>
              </p>
              <p className="font-semibold mb-2">
                Comunicação eficaz:{" "}
                <span className="font-normal">
                  O monitoramento facilita o fluxo de informações entre todos os
                  envolvidos no projeto. Por meio de relatórios periódicos e
                  atualizações constantes, investidores, equipes técnicas e
                  clientes permanecem informados sobre o andamento da obra,
                  agilizando decisões e ajustes quando necessário.
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
