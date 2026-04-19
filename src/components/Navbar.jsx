import { useState, useEffect } from 'react'
import { FaUser, FaFolder, FaCode, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed w-full z-50 flex justify-center mt-4">

      {/* Container Tengah */}
      <div
        className={`flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 w-[90%] md:w-auto
        ${scrolled 
          ? 'bg-black/80 backdrop-blur border-white/10 shadow-lg' 
          : 'bg-white/5 backdrop-blur border-white/10'
        }`}
      >

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm">

          <a href="#about" className="flex items-center gap-2 hover:text-purple-400 transition">
            <FaUser size={14} /> About
          </a>

          <a href="#projects" className="flex items-center gap-2 hover:text-purple-400 transition">
            <FaFolder size={14} /> Projects
          </a>

          <a href="#experience" className="flex items-center gap-2 hover:text-purple-400 transition">
            <FaCode size={14} /> Experiences
          </a>

          <a href="#contact" className="flex items-center gap-2 hover:text-purple-400 transition">
            <FaEnvelope size={14} /> Contact
          </a>

        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 w-[90%] bg-black/90 backdrop-blur rounded-2xl text-center py-6 space-y-6 md:hidden transition-all duration-300
        ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
      >
        <a onClick={() => setOpen(false)} href="#about" className="block hover:text-purple-400">About</a>
        <a onClick={() => setOpen(false)} href="#projects" className="block hover:text-purple-400">Projects</a>
        <a onClick={() => setOpen(false)} href="#skills" className="block hover:text-purple-400">Experiences</a>
        <a onClick={() => setOpen(false)} href="#contact" className="block hover:text-purple-400">Contact</a>
      </div>

    </nav>
  )
}
