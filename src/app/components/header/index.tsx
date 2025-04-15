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
      <div className="container mx-auto  w-full  flex justify-between items-center p-3">
        <div className="flex items-center gap-2">
          <Image
            src={LogoImovel360}
            alt="Imovel360"
            width={50}
            className="h-auto"
          />
          <DropdownMenu />
        </div>
        <div className="flex  items-center">
          <Phone width={27} height={27} className="text-[#087B82]" />
          <div className="ml-2 flex-row">
            <h1 className="text-sm">Ligue agora</h1>
            <button
              className="text-xs text-[#087B82] font-bold text-2xl"
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
