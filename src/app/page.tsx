import Image from "next/image";
import Header from "./components/header";

import RegulamentaImg from "@/app/assets/employee-working-project-side-view.jpg";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col items-center ">
        <div className="relative w-full max-w-1xl  rounded-lg shadow-lg overflow-hidden ">
          <div className="bg-black">
            <Image
              src={RegulamentaImg}
              alt="regulamentação"
              className="object-cover w-full h-64 md:h-80 opacity-50"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md md:w-[80%]">
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
