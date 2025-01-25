"use client";

import { useState } from "react";
import "./navbar.css";
import Image from "next/image";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"], weight: "400" });

const navlogo = [
  {
    img: "/logo.png",
    name: "Postivus",
  },
];

const items = [
  { id: 1, name: "About us", link: "/about" },
  { id: 2, name: "Services", link: "/services" },
  { id: 3, name: "Use cases", link: "/usecases" },
  { id: 4, name: "Pricing", link: "/pricing" },
  { id: 5, name: "Blog", link: "/blog" },
  { id: 6, name: "Request a quote", link: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={`${roboto.className}`}>
      <div className="parent flex justify-between items-center">
        {/* Logo */} 
        <div className="flex items-center gap-2">
          {navlogo.map((item) => (
            <div className="flex items-center gap-2" key={item.name}>
              <Image src={item.img} alt="logo" width={40} height={40} />
              <Link href={"/"}>
              <h1 className="text-xl font-bold">{item.name}</h1></Link>
            </div>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`hover:underline ${
                item.id === 6 ? "border-2 rounded-lg px-4 py-2" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-green-400 text-black flex flex-col justify-center items-center z-50 transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 bg-black text-white rounded-full p-2"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile Nav Items */}
        <div className="flex flex-col gap-8 text-xl text-center">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={closeMenu}
              className={`${
                item.id === 6
                  ? "border-2 border-black rounded-lg px-4 py-2"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
