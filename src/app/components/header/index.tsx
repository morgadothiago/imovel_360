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
    <div className="w-full bg-[#D4CCBF]">
      <div className="container mx-auto w-full flex flex-row sm:flex-row justify-between items-center p-3">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <Image
            src={LogoImovel360}
            alt="Imovel360"
            width={50}
            className="h-auto"
          />
          <DropdownMenu />
        </div>
        <div className="flex flex-row items-center sm:flex-row">
          <Phone
            width={27}
            height={27}
            className="text-[#087B82] mb-1 sm:mb-0"
          />
          <div className="flex flex-col text-left sm:text-left">
            <h1 className="text-xs sm:text-sm">Ligue agora</h1>
            <button
              className="text-xs text-[#087B82]  font-bold  sm:text-sm"
              onClick={handleWhatApp}
            >
              (11) 92200-52992
            </button>
            <p className="text-xs">algumemail@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
