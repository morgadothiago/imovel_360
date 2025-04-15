"use client";

import Image from "next/image";
import React from "react";

import LogoImovel360 from "../../../../public/logo 1.png";
import DropdownMenu from "../menuItem";
import { Phone } from "lucide-react";

export default function Header() {
  function handleWhatApp() {
    alert("app");
  }

  return (
    <div className="w-full bg-[#D4CCBF] shadow-md">
      <div className="container mx-auto flex flex-row sm:flex-row justify-between items-center p-4">
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <Image
            src={LogoImovel360}
            alt="Imovel360"
            width={60}
            className="h-auto rounded-full border-2 border-[#087B82] shadow-lg"
          />
          <DropdownMenu />
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <Phone
            width={30}
            height={30}
            className="text-[#087B82] mb-1 sm:mb-0"
          />
          <div className="flex flex-col text-center sm:text-center ml-2">
            <h1 className="text-sm font-semibold text-[#087B82]">
              Ligue agora
            </h1>
            <button
              className="text-sm text-[#087B82] font-bold hover:underline"
              onClick={handleWhatApp}
            >
              (11) 92005-2992
            </button>
            <p className="text-xs text-gray-600">algumemail@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
