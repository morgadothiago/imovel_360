import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#D4CCBF] text-[#087B82]">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter */}
        <div className="mb-12 p-8 bg-gradient-to-br from-white to-[#D4CCBF]/10 rounded-2xl shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#087B82]">Receba Novidades e Atualizações</h3>
            <p className="text-gray-700 mb-6">Fique por dentro das últimas tendências e novidades do mercado imobiliário</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-1 max-w-md px-6 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#087B82] focus:border-transparent shadow-sm hover:shadow-md transition-shadow"
              />
              <button className="px-8 py-3 bg-[#087B82] text-white rounded-xl hover:bg-[#065c61] transition-all transform hover:scale-105 hover:shadow-lg active:scale-95">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 flex items-center group">
              Imóvel<span className="text-[#065c61] group-hover:text-[#087B82] transition-colors">360</span>
              <span className="ml-2 px-3 py-1 bg-[#087B82] text-white text-sm rounded-full shadow-sm group-hover:shadow-md transition-all">
                Confiança
              </span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Soluções completas para seu imóvel.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>⭐</span>
              <span>Avaliação 4.9/5</span>
              <span>|</span>
              <span>+1000 Clientes Satisfeitos</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-[#087B82] after:rounded-full">
              Links Rápidos
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/regularizacao" className="flex items-center hover:text-[#065c61] transition-all hover:translate-x-2">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Regularização de imóveis
                </Link>
              </li>
              <li>
                <Link href="/topografia" className="flex items-center hover:text-[#065c61] transition-all hover:translate-x-2">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Levantamento Topográfico
                </Link>
              </li>
              <li>
                <Link href="/moveis" className="flex items-center hover:text-[#065c61] transition-all hover:translate-x-2">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Móveis planejados
                </Link>
              </li>
              <li>
                <Link href="/avaliacao" className="flex items-center hover:text-[#065c61] transition-all hover:translate-x-2">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Avaliação de imóveis
                </Link>
              </li>
              <li>
                <Link href="/obras" className="flex items-center hover:text-[#065c61] transition-all hover:translate-x-2">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Acompanhamento de Obras
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-[#087B82] after:rounded-full">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="group flex items-center hover:text-[#065c61] transition-all cursor-pointer">
                <div className="w-10 h-10 mr-3 bg-[#087B82]/10 rounded-full flex items-center justify-center group-hover:bg-[#087B82]/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="group-hover:underline">(11) 92005-2992</span>
              </li>
              <li className="group flex items-center hover:text-[#065c61] transition-all cursor-pointer">
                <div className="w-10 h-10 mr-3 bg-[#087B82]/10 rounded-full flex items-center justify-center group-hover:bg-[#087B82]/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="group-hover:underline">contatoimovel360@outlook.com</span>
              </li>
             
            </ul>

            {/* Redes Sociais */}
            {/* <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-[#087B82] after:rounded-full">
                Conecte-se conosco
              </h4>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="group p-3 bg-[#087B82]/10 rounded-full hover:bg-[#087B82] transition-all transform hover:scale-110 hover:shadow-lg">
                  <svg className="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="group p-3 bg-[#087B82]/10 rounded-full hover:bg-[#087B82] transition-all">
                  <svg className="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="group p-3 bg-[#087B82]/10 rounded-full hover:bg-[#087B82] transition-all">
                  <svg className="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="group p-3 bg-[#087B82]/10 rounded-full hover:bg-[#087B82] transition-all">
                  <svg className="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
        </div>

        {/* Direitos Autorais e Links Adicionais */}
        <div className="border-t border-gray-600/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 hover:text-[#087B82] transition-colors">© {new Date().getFullYear()} Imóvel360. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/politica-privacidade" className="text-gray-600 hover:text-[#087B82] transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="text-gray-600 hover:text-[#087B82] transition-colors">
                Termos de Uso
              </Link>
              <Link href="/mapa-site" className="text-gray-600 hover:text-[#087B82] transition-colors">
                Mapa do Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
