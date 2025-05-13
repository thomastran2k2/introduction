import React from 'react'
import Link from 'next/link'
import {Playwrite_DK_Loopet } from "next/font/google"

const playwrite = Playwrite_DK_Loopet({
  
  weight: ["100", "200", "300", "400"],
})
const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between p-4 bg-zinc-800">
        <div
          className={`text-black font-bold text-xl ${playwrite.className}`}
          
        >
          <Link href="/" className='header'>Thomas Tran</Link>
          
        </div>
        <ul className="flex list-none gap-4 m-0 p-0">
          <li className='group'>
            <Link
              href="/"
              className="relative px-4 py-2 text-white cursor-pointer transition-opacity"
            >
            
              <span>Home</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
            </Link>
            
          </li>
          <li className="group">
            <a
              href="/projects"
              className="relative px-4 py-2 text-white cursor-pointer transition-opacity"
            >
              <span>Projects</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
            </a>
          </li>
          <li className="group">
            <a
              href="/contact"
              className="relative px-4 py-2 text-white cursor-pointer transition-opacity"
            >
              <span>Contact</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar