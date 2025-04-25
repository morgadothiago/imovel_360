"use client";

import React, { useState } from "react";

import {  Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Regularização de imoveis", href: "/regularizacao" },
    { label: "Topografia", href: "/topografia" },
    { label: "Móveis planejados", href: "/moveis" },
    { label: "Avaliação de imoveis", href: "/avaliacao" },
    { label: "Acompanhamento de obras", href: "/obras" },
  ];

  return (
    <div className="w-full bg-[#D4CCBF] shadow-md">
      <div className="container w-full mx-auto justify-between flex flex-row items-center p-4">
        <div className="flex items-center gap-4 flex-1">
          <Link href="/" className="flex items-center">
            <span className="text-[#087B82] text-2xl font-bold tracking-tight">
              Imóvel<span className="text-[#065c61]">360</span>
            </span>
          </Link>
          
          {/* Menu para Desktop */}
          <nav className="hidden md:flex w-full gap-6 md:items-end md:justify-end">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#087B82] hover:text-[#065c61] font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Botão do Menu Mobile */}
        <button
          className="md:hidden text-[#087B82] ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#D4CCBF] border-t border-[#087B82]/20">
          <nav className="container mx-auto py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#087B82] hover:text-[#065c61] font-medium block py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
