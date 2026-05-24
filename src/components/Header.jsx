import React from 'react'
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="GenZ HR" className="h-10 w-10" />
          <div className="font-extrabold">The <span className="text-sky-600">GenZ</span> HR</div>
        </a>
        <nav className="hidden gap-6 text-sm font-semibold text-slate-600 md:flex">
          <a href="#services" className="hover:text-sky-600">Services</a>
          <a href="#packages" className="hover:text-sky-600">Packages</a>
          <a href="#contact" className="hover:text-sky-600">Contact</a>
        </nav>
      </div>
    </header>
  )
}
