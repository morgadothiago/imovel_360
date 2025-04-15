import Image from "next/image";
import Header from "./components/header";

import RegulamentaImg from "@/app/assets/employee-working-project-side-view.jpg";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col items-center ">
        <div className="relative w-full max-w-1xl overflow-hidden ">
          <div className="bg-black">
            <Image
              src={RegulamentaImg}
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

        <div className="relative w-full max-w-1xl overflow-hidden ">
          <div className="bg-white sm:p-6 rounded-lg  md:w-[80%] p-3">
            <h1 className="text-[#087B82] text-2xl md:text-3xl font-bold mb-4">
              Quais são os benefícios:
            </h1>
            <div className="px-4">
              <ol className="list-decimal pl-5 mb-6">
                <li>
                  <strong>Segurança Jurídica</strong>
                  <ul>
                    <li>
                      Prova de propriedade: A regularização confirma a posse
                      legal do imóvel, evitando disputas judiciais.
                    </li>
                    <li>
                      Proteção contra reinvindicações: Reduz o risco de perder o
                      imóvel para terceiros que aleguem direitos sobre a
                      propriedade.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Valorização do Imóvel</strong>
                  <ul>
                    <li>
                      Imóveis regularizados têm maior valor de mercado, pois são
                      mais atraentes para compradores e investidores.
                    </li>
                    <li>
                      Bancos e financeiras só concedem crédito (financiamento,
                      hipoteca) para imóveis regularizados.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Possibilidade de Venda Financiada pelo Banco</strong>
                  <ul>
                    <li>
                      Sem a documentação em dia, fica difícil vender o imóvel,
                      pois os bancos não financiam o imóvel sem a matrícula
                      regular.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Evita Multas e Ações Judiciais</strong>
                  <ul>
                    <li>
                      Imóveis irregulares podem ser alvo de fiscalização,
                      embargo ou até demolição (especialmente em áreas de
                      preservação ou risco).
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
