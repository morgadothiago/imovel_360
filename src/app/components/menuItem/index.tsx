"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Change 'any' to 'MouseEvent'
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      // Cast event.target to Node
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sm:relative inline-block text-left" ref={menuRef}>
      <div className="flex items-center justify-center">
        <button
          onClick={toggleMenu}
          className="inline-flex justify-center items-end mx-auto rounded-md px-2 py-1 bg-transparent text-[16px] text-[#087B82] font-bold md:text-xl md:px-6 md:py-3"
        >
          Acessar todos os nossos serviços
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.293l3.71-3.08a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 w-full rounded-lg bg-[#D4CCBF] mt-26 md:mt-4">
          <div
            className="py-2 bg-[#D4CCBF] rounded-2xl w-full"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="/topografia"
              className="block font-bold px-6 py-3 text-lg text-[#087b81] hover:bg-gray-200 transition duration-200 ease-in-out"
              role="menuitem"
            >
              Levantamento Topográfico
            </Link>
            <Link
              href="/avaliacao"
              className="block font-bold px-6 py-3 text-lg text-[#087b81] hover:bg-gray-200 transition duration-200 ease-in-out"
              role="menuitem"
            >
              Avaliação de Imóveis
            </Link>
            <Link
              href="/Moveis"
              className="block font-bold px-6 py-3 text-lg text-[#087b81] hover:bg-gray-200 transition duration-200 ease-in-out"
              role="menuitem"
            >
              Móveis Planejados
            </Link>
            <Link
              href="/obras"
              className="block font-bold px-6 py-3 text-lg text-[#087b81] hover:bg-gray-200 transition duration-200 ease-in-out"
              role="menuitem"
            >
              Acompanhamento de Obras
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
