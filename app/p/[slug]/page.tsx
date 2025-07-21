"use client"

import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

import Nav from '@/components/Nav'
import LProjects from '@/components/LProjects'
import LBlog from '@/components/LBlog'

import ReactMarkdown from 'react-markdown'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-[27%] h-full border-r border-slate-100 dark:border-slate-900 relative hidden md:block"><Nav /></div>
      <div className="w-full md:w-[46%] h-full p-5 overflow-y-scroll">

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

        <h1 className="text-2xl md:text-3xl md:mt-5 mb-2">How I built my own open-source AI-powered application builder with NextJS and OpenRouter APIs</h1>
        <p className="text-sm text-slate-500 mb-4">20th July, 2025</p>
        <div className="w-full h-[200px] bg-slate-500 mb-4"></div>
        <ReactMarkdown>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa minus sit nobis ab velit voluptatibus sunt quos explicabo, reprehenderit aperiam dicta eum eveniet natus. Excepturi in laudantium cum. Unde, nam!</ReactMarkdown>
        
      </div>
      <div className="w-[27%] h-full hidden md:flex flex-col items-center justify-end p-10">
      </div>
    </>
  );
}
