"use client"

import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

import Nav from '@/components/Nav'
import LProjects from '@/components/LProjects'
import LBlog from '@/components/LBlog'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-[27%] h-full border-r border-slate-100 dark:border-slate-900 relative hidden md:block"><Nav /></div>
      <div className="w-full md:w-[46%] h-full p-2 md:p-5 overflow-y-scroll">

        {/* MOBILE SIDEBAR */}
        {/* MOBILE MENU BUTTON */}
        <div className="block md:hidden z-50">
          <button onClick={() => setIsOpen(true)}>
            <LuMenu className="text-2xl mb-5" />
          </button>

          {/* OVERLAY MENU */}
          {isOpen && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex flex-col">
              <div className="flex justify-end p-4">
                <button onClick={() => setIsOpen(false)}>
                  <LuX className="text-3xl text-white" />
                </button>
              </div>

              <nav className="flex flex-col items-center gap-6 mt-10 text-white text-lg">
                <a href="#home" onClick={() => setIsOpen(false)} className="hover:underline">Blog</a>
                <a href="#about" onClick={() => setIsOpen(false)} className="hover:underline">Projects</a>
                <a href="#services" onClick={() => setIsOpen(false)} className="hover:underline">Goodies</a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="hover:underline">Contact</a>
              </nav>
            </div>
          )}
        </div>

        <h1 className="text-3xl mb-2 md:mt-5">I'm Emmanuel Alabi, a software developer.<br />Welcome to my space.</h1>
        <p className="text-sm mb-4">College student and software engineer currently based in Rwanda. At the moment I mostly do full-stack web development. I also build mobile apps, discord bots, and other things. I mostly work with Javascript and Python-based frameworks.</p>
        <div className="flex gap-2">
          <a href="#" className="hover:cursor-pointer">
            <button className="relative px-2 py-1 text-sm border border-2 border-foreground overflow-hidden group">
              <span className="relative z-10 text-foreground group-hover:text-background transition duration-300">
                See my work
              </span>
              <span className="absolute left-0 top-0 h-full w-0 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full z-0" />
            </button>
          </a>
          <a href="#" className="hover:cursor-pointer">
            <button className="relative px-2 py-1 text-sm border border-2 border-foreground overflow-hidden group">
              <span className="relative z-10 text-foreground group-hover:text-background transition duration-300">
                Download my resume
              </span>
              <span className="absolute left-0 top-0 h-full w-0 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full z-0" />
            </button>
          </a>
        </div>
        <LProjects />
        <LBlog />
      </div>
      <div className="w-[27%] h-full hidden md:flex flex-col items-center justify-end p-10">
      </div>
    </>
  );
}
