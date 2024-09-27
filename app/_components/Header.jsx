'use client'
import React, { useState } from 'react'

function Header() {
  const [menuAction,setMenuActive] = useState(false);
  return (
   <header  className='h-[65px] sticky w-full top-0 z-40 border-gray-800 border-b  transition-colors duration-500  flex items-center px-4 backdrop-blur-2xl ' >
    <div className="container">
      <div className='flex items-center justify-between' >
        <div>
          <h2 className='text-[24px] dark:text-[22px] font-semibold uppercase dark:text-white'>Jenifar Jui</h2>
        </div>
        <div>
        <nav className={`max-md:w-[80%] max-md:fixed max-md:shadow-2xl top-0 max-md:bg-black ${menuAction? 'left-0':'-left-[100%]'} max-md:h-screen duration-300`} >
          <ul className='flex items-center gap-8 md:gap-2 h-full max-md:flex-col justify-center'>
            <li><a onClick={()=>setMenuActive(false)} className=' hover:bg-[#1f2937] duration-200 hover:text-white text-slate-300 rounded-sm px-3 py-[10px] text-sm max-md:text-2xl font-medium' href="#home">Home</a></li>
            <li><a onClick={()=>setMenuActive(false)} className=' hover:bg-[#1f2937] duration-200 hover:text-white text-slate-300 rounded-sm px-3 py-[10px] text-sm max-md:text-2xl font-medium' href="#about-me">About Me</a></li>
            <li><a onClick={()=>setMenuActive(false)} className=' hover:bg-[#1f2937] duration-200 hover:text-white text-slate-300 rounded-sm px-3 py-[10px] text-sm max-md:text-2xl font-medium' href="#skills">Skills</a>
            </li> 
        <li><a onClick={()=>setMenuActive(false)} className=' hover:bg-[#1f2937] duration-200 hover:text-white text-slate-300 rounded-sm px-3 py-[10px] text-sm max-md:text-2xl font-medium' href="#portfolio">Portfolio</a></li>
        <li><a onClick={()=>setMenuActive(false)} className=' hover:bg-[#1f2937] duration-200 hover:text-white text-slate-300 rounded-sm px-3 py-[10px] text-sm max-md:text-2xl font-medium' href="#services">Services</a></li>
        <a href="#contact">
        <button className=' text-white bg-primary hover:bg-[#037dba] duration-150 rounded px-3 py-[10px] text-sm max-md:text-2xl font-medium'>Contact Me</button>
        </a>
          </ul>
          <button className='bg-slate-800 border-primary w-10 h-10 rounded-full hover:bg-primary flex items-center justify-center absolute right-4 top-4 text-white md:hidden' onClick={()=>setMenuActive(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          
        </nav>
       <button className='text-white text-xl hover:text-primary duration-150 md:hidden block' onClick={()=>setMenuActive(true)}>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
       </button>
        </div>
      </div>
    </div>
   </header>
  )
}

export default Header