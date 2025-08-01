"use client"
import { useState, useEffect } from 'react'
import { LuBird, LuFolder, LuFeather, LuSend, } from 'react-icons/lu'
import {FaGithub, FaInstagram, FaTiktok, FaDiscord, FaBluesky} from 'react-icons/fa6'

export default function Nav() {
    return (
        <div className="flex flex-col items-center w-fit absolute right-5 top-[50%] -translate-y-[50%] gap-3">
            <div className='group relative'>
                <p className="text-sm hidden group-hover:block absolute text-right right-[150%] w-20">Home</p>
                <a href="#" className='text-lg text-foreground hover:text-red-500'><LuFeather /></a>
            </div>
            <div className='group relative'>
                <p className="text-sm hidden group-hover:block absolute text-right right-[150%] w-20">Portfolio</p>
                <a href="#" className='text-lg text-foreground hover:text-red-500'><LuFolder /></a>
            </div>
            <div className='group relative'>
                <p className="text-sm hidden group-hover:block absolute text-right right-[150%] w-20">Contact</p>
                <a href="#" className='text-lg text-foreground hover:text-red-500'><LuSend /></a>
            </div>
            <div className="w-3 my-2 border-b"></div>
            <div><a href="#" className='text-lg text-foreground hover:text-blue-400'><FaGithub /></a></div>
            <div><a href="#" className='text-lg text-foreground hover:text-blue-400'><FaBluesky /></a></div>
            <div><a href="#" className='text-lg text-foreground hover:text-blue-400'><FaDiscord /></a></div>
            <div><a href="#" className='text-lg text-foreground hover:text-blue-400'><FaInstagram /></a></div>
            <div><a href="#" className='text-lg text-foreground hover:text-blue-400'><FaTiktok /></a></div>
        </div>
    )
}